exports.routes = function (map) {

    map.resources("users");
    map.get("/", "users#index");
    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    map.all(':controller/:action');
    map.all(':controller/:action/:id');
};
