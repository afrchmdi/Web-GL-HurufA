(function(global) {

  var canvas, gl, program;

  glUtils.SL.init({ callback:function() { main(); } });

  function main() {
    // Register Callbacks
    window.addEventListener('resize', resizer);

    // Get canvas element and check if WebGL enabled
    canvas = document.getElementById("glcanvas");
    gl = glUtils.checkWebGL(canvas);

    // Initialize the shaders and program
    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex),
        fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);

    program = glUtils.createProgram(gl, vertexShader, fragmentShader);

    gl.useProgram(program);

    resizer();
  }

  // draw!
  function draw() {
    // renderer info
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);


    var linesVertices1 = new Float32Array([
      // garis datar atas
      -0.5, 0.4, -0.3,  0.4
    ]);
    var linesVertices2 = new Float32Array([
      // garis panjang kiri luar
      -0.5, 0.4, -0.7, -0.5,  
    ]);
    var linesVertices3 = new Float32Array([
      // garis miring atas
      -0.3, 0.4, -0.4, 0.3
    ]);
    var linesVertices4 = new Float32Array([
      // garis datar bawah kiri
      -0.7, -0.5, -0.65, -0.5
    ]);
    var linesVertices5 = new Float32Array([
      // garis panjang kanan luar
      -0.4, 0.3, -0.3, -0.35
    ]);
    var linesVertices6 = new Float32Array([
      // garis datar bawah kanan
      -0.3, -0.35, -0.35, -0.35
    ]);
    var linesVertices7 = new Float32Array([
      // garis panjang kiri dalam
      -0.65, -0.5, -0.45, 0.3
    ]);
    var linesVertices8 = new Float32Array([
      // garis panjang kanan dalam atas
      -0.45, 0.3, -0.4, -0.05
    ]);
    var linesVertices9 = new Float32Array([
      // garis panjang kanan dalam bawah
      -0.35, -0.35, -0.38, -0.15
    ]);
    var linesVertices10 = new Float32Array([
      // garis tengah bawah
      -0.38, -0.15, -0.53, -0.15
    ]);
    var linesVertices11 = new Float32Array([
      // garis tengah atas
      -0.4, -0.05, -0.5, -0.05
    ]);
    var linesVertices12 = new Float32Array([
      // garis tengah pinggir
      -0.5, -0.05, -0.53, -0.15
    ]);
  

    var triangleVertices1 = new Float32Array([
      0.3, 0.4, 0.5,  0.4, // garis datar atas
      0.3, 0.4, 0.1, -0.5,  //garis panjang kiri luar
      0.15, -0.5, 0.35, 0.3, // garis panjang kiri dalam
      0.5, 0.4, 0.4, 0.3, // garis miring atas
      0.4, 0.3, 0.5, -0.35, // garis panjang kanan luar
      0.35, 0.3, 0.4, -0.05,  // garis panjang kanan dalam atas
      0.45, -0.35, 0.42, -0.15, // garis panjang kanan dalam atas
      0.5, -0.35, 0.45, -0.35, // garis datar bawah kanan
    ]);

    // garis tengah full 

    var triangleVertices2 = new Float32Array([
      0.42, -0.15, 0.4, -0.05
    ]);

    var triangleVertices3 = new Float32Array([
      0.42, -0.15, 0.27, -0.15, 0.3, -0.05,  0.4, -0.05
    ]);

    //

    drawA(gl.LINES, linesVertices1);
    drawA(gl.LINES, linesVertices2);
    drawA(gl.LINES, linesVertices3);
    drawA(gl.LINES, linesVertices4);
    drawA(gl.LINES, linesVertices5);
    drawA(gl.LINES, linesVertices6);
    drawA(gl.LINES, linesVertices7);
    drawA(gl.LINES, linesVertices8);
    drawA(gl.LINES, linesVertices9);
    drawA(gl.LINES, linesVertices10);
    drawA(gl.LINES, linesVertices11);
    drawA(gl.LINES, linesVertices12);
    drawA(gl.TRIANGLE_FAN, triangleVertices1);
    drawA(gl.TRIANGLE_FAN, triangleVertices2);
    drawA(gl.TRIANGLE_FAN, triangleVertices3);
  }

  // function drawPoint() {
  //   var n = initPointBuffers();
  //   if (n < 0) {
  //     console.log('Failed to set the positions of the vertices');
  //     return;
  //   }
  //   gl.drawArrays(gl.POINTS, 0, n);
  // }

  // function initPointBuffers() {
  //   var vertices = new Float32Array([
  //     -0.5, -0.5
  //   ]);
  //   var n = 1;

  //   var vertexBuffer = gl.createBuffer();
  //   if (!vertexBuffer) {
  //     console.log('Failed to create the buffer object');
  //     return -1;
  //   }

  //   gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  //   gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  //   var aPosition = gl.getAttribLocation(program, 'aPosition');
  //   if (aPosition < 0) {
  //     console.log('Failed to get the storage location of aPosition');
  //     return -1;
  //   }

  //   gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
  //   gl.enableVertexAttribArray(aPosition);
  //   return n;
  // }

  function drawLine() {
    var n = initLineBuffers();
    if (n < 0) {
      console.log('Failed to set the positions of the vertices');
      return;
    }
    gl.drawArrays(gl.LINES, 0, n);
  }

  function initLineBuffers() {
    var vertices = new Float32Array([
      -0.25, -0.25,  -0.25, +0.5
    ]);
    var n = 2;

    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var aPosition = gl.getAttribLocation(program, 'aPosition');
    if (aPosition < 0) {
      console.log('Failed to get the storage location of aPosition');
      return -1;
    }

    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);
    return n;
  }

  function drawTriangle() {
    var n = initTriangleBuffers();
    if (n < 0) {
      console.log('Failed to set the positions of the vertices');
      return;
    }
    gl.drawArrays(gl.TRIANGLES, 0, n);
  }

  function initTriangleBuffers() {
    var vertices = new Float32Array([
      +0.5, -0.5,  0.0, 0.0,  +0.5, 0.0
    ]);
    var n = 3;

    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var aPosition = gl.getAttribLocation(program, 'aPosition');
    if (aPosition < 0) {
      console.log('Failed to get the storage location of aPosition');
      return -1;
    }

    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);
    return n;
  }

  // Generic format
  function drawA(type, vertices) {
    var n = initBuffers(vertices);
    if (n < 0) {
      console.log('Failed to set the positions of the vertices');
      return;
    }
    gl.drawArrays(type, 0, n);
  }

  function initBuffers(vertices) {
    var n = vertices.length / 2;

    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
      console.log('Failed to create the buffer object');
      return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var aPosition = gl.getAttribLocation(program, 'aPosition');
    if (aPosition < 0) {
      console.log('Failed to get the storage location of aPosition');
      return -1;
    }

    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);
    return n;
  }

  function resizer() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    draw();
  }

})(window || this);
