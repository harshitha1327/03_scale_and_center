function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function relativeDimension(relativeValue, Dimension) {
    return relativeValue * Dimension;
}


module.exports = {
    calcOffset,
    relativeDimension,
};