/**
 * WebGL2 Smoke Background — Vanilla JS (converted from React shadcn)
 * Premium animated smoke/fog effect for Avanti Restaurant
 * Uses theme gold color (#dfb15b) tint
 */
(function() {
    'use strict';

    const fragmentShaderSource = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec3 u_color;

#define FC gl_FragCoord.xy
#define R resolution
#define T (time+660.)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}

void main(){
  vec2 uv=(FC-.5*R)/R.y;
  vec3 col=vec3(1);
  uv.x+=.25;
  uv*=vec2(2,1);

  float n=fbm(uv*.28-vec2(T*.01,0));
  n=noise(uv*3.+n*2.);

  col.r-=fbm(uv+vec2(0,T*.015)+n);
  col.g-=fbm(uv*1.003+vec2(0,T*.015)+n+.003);
  col.b-=fbm(uv*1.006+vec2(0,T*.015)+n+.006);

  col=mix(col, u_color, dot(col,vec3(.21,.71,.07)));
  col=mix(vec3(.08),col,min(time*.1,1.));
  col=clamp(col,.08,1.);
  O=vec4(col,1);
}`;

    const vertexSrc = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

    class SmokeRenderer {
        constructor(canvas, fragmentSource) {
            this.canvas = canvas;
            this.gl = canvas.getContext('webgl2');
            this.color = [0.874, 0.694, 0.357]; // #dfb15b gold
            this.vertices = [-1, 1, -1, -1, 1, 1, 1, -1];
            this.setup(fragmentSource);
            this.init();
            this.updateScale();
            this.bindEvents();
        }

        setup(fragmentSource) {
            const gl = this.gl;
            this.vs = gl.createShader(gl.VERTEX_SHADER);
            this.fs = gl.createShader(gl.FRAGMENT_SHADER);
            const program = gl.createProgram();
            if (!this.vs || !this.fs || !program) return;

            gl.shaderSource(this.vs, vertexSrc);
            gl.compileShader(this.vs);
            gl.shaderSource(this.fs, fragmentSource);
            gl.compileShader(this.fs);
            this.program = program;
            gl.attachShader(program, this.vs);
            gl.attachShader(program, this.fs);
            gl.linkProgram(program);
        }

        init() {
            const gl = this.gl;
            const program = this.program;
            if (!program) return;

            this.buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);

            const position = gl.getAttribLocation(program, 'position');
            gl.enableVertexAttribArray(position);
            gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

            program.resolution = gl.getUniformLocation(program, 'resolution');
            program.time = gl.getUniformLocation(program, 'time');
            program.u_color = gl.getUniformLocation(program, 'u_color');
        }

        updateScale() {
            const dpr = Math.max(1, window.devicePixelRatio || 1);
            const w = window.innerWidth;
            const h = window.innerHeight;
            this.canvas.width = w * dpr;
            this.canvas.height = h * dpr;
            this.canvas.style.width = w + 'px';
            this.canvas.style.height = h + 'px';
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }

        bindEvents() {
            const self = this;
            window.addEventListener('resize', function() { self.updateScale(); });
        }

        render(now) {
            const gl = this.gl;
            const program = this.program;
            if (!program || !gl.isProgram(program)) return;

            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.useProgram(program);
            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

            gl.uniform2f(program.resolution, this.canvas.width, this.canvas.height);
            gl.uniform1f(program.time, now * 0.001);
            gl.uniform3fv(program.u_color, this.color);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }

        reset() {
            const gl = this.gl;
            const program = this.program;
            if (!program) return;
            if (this.vs) { gl.detachShader(program, this.vs); gl.deleteShader(this.vs); }
            if (this.fs) { gl.detachShader(program, this.fs); gl.deleteShader(this.fs); }
            gl.deleteProgram(program);
        }
    }

    // Initialize when DOM is ready
    function initSmokeBg() {
        const canvas = document.getElementById('smoke-bg-canvas');
        if (!canvas) return;

        try {
            const renderer = new SmokeRenderer(canvas, fragmentShaderSource);

            function loop(now) {
                renderer.render(now);
                requestAnimationFrame(loop);
            }
            requestAnimationFrame(loop);

            // Store for cleanup
            window.__smokeBgRenderer = renderer;
        } catch (e) {
            console.warn('WebGL2 smoke background not supported:', e.message);
            canvas.style.display = 'none';
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSmokeBg);
    } else {
        initSmokeBg();
    }
})();
