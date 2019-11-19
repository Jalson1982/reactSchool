
export const manageStateDependingOnPath = (path, a, b, c, d) => {

    switch (path) {
        case "/": return a;
        case "/best-movies": return b;
        case "/best-series": return c;
        case "/coming-soon": return d;
        default: return a;
    }
}

