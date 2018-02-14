$(document).ready(function () {
    var canvas = document.getElementById("canvas0");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = '#311b92';
    ctx.moveTo(0, 15);
    ctx.lineTo(2, 10);
    ctx.lineTo(4, 15);
    ctx.lineTo(6, 10);
    ctx.lineTo(8, 7);
    ctx.lineTo(10, 8);
    ctx.lineTo(12, 4);
    ctx.lineTo(14, 15);
    ctx.lineTo(16, 10);
    ctx.lineTo(18, 14);
    ctx.lineTo(20, 12);
    ctx.lineTo(22, 15);
    ctx.lineTo(24, 15);
    ctx.lineTo(26, 10);
    ctx.lineTo(28, 7);
    ctx.lineTo(30,15);
    ctx.stroke();

    canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d");
    ctx.strokeStyle = '#311b92';
    ctx.moveTo(0, 15);
    ctx.lineTo(2, 15);
    ctx.lineTo(4, 15);
    ctx.lineTo(6, 12);
    ctx.lineTo(8, 12);
    ctx.lineTo(10, 15);
    ctx.lineTo(12, 8);
    ctx.lineTo(14, 13);
    ctx.lineTo(16, 10);
    ctx.lineTo(18, 14);
    ctx.lineTo(20, 12);
    ctx.lineTo(22, 10);
    ctx.lineTo(24, 9);
    ctx.lineTo(26, 15);
    ctx.lineTo(28, 15);
    ctx.lineTo(30,15);
    ctx.stroke();
    
    // // Datatable
    // $("#example").DataTable({
    //     pageLength: 12,
    //     responsive: true,
    //     select: {
    //         style: 'single'
    //     },
    //     columnDefs: [
    //         {
    //             orderable: false,
    //             targets: [0, 5]
    //         }
    //     ],
    //     order: [[3, 'asc']]
    // });

    // // Settings
    // $(function () {
    //     $('#btn-set-date').click(function (event) {
    //         alert("GO");
    //     });
    // });

    // // Clickpicker
    // $('#clockpicker').clockpicker();

});