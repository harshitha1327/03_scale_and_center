const r = require("raylib");

const g = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

const WIDTH = 1000;
const HEIGHT = 1000;
const FPS = 50;

function setup() {
    r.InitWindow(WIDTH, HEIGHT, "Scale and Center");
    r.SetTargetFPS(FPS);
}


function update() { }

function scaleAndCenter() {
    const outerRectangleWidth = 500;
    const outerRectangleHeight = 400;

    const outerRectangleX = 40;
    const outerRectangleY = 50;

    const relativeWidthInnerRectangle = 0.5;
    const relativeHeightInnerRectangle = 0.2;

    r.DrawRectangle(
        outerRectangleX,
        outerRectangleY,
        outerRectangleWidth,
        outerRectangleHeight,
        r.WHITE,
    );

    const innerRectangleWidth = g.relativeDimension(
        relativeWidthInnerRectangle,
        outerRectangleWidth,
    );
    const innerRectangleHeight = g.relativeDimension(
        relativeHeightInnerRectangle,
        outerRectangleWidth,
    );

    const innerRectangleCoordinateX = g.calcOffset(
        outerRectangleWidth,
        innerRectangleWidth,
    ) + outerRectangleX;
    const innerRectangleCoordinateY = g.calcOffset(
        outerRectangleHeight,
        innerRectangleHeight,
    ) + outerRectangleY;

    r.DrawRectangle(
        innerRectangleCoordinateX,
        innerRectangleCoordinateY,
        innerRectangleWidth,
        innerRectangleHeight,
        r.RED,
    );

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    scaleAndCenter();

    r.EndDrawing();
}

function teardown() {
    return r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
