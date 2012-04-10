exports.routes = function (map) {

    
    // Generic routes. Add all your routes below this line

    map.resources("users");
    map.get("/", "users#index");
    // feel free to remove generic routes
    map.all(':controller/:action');
    map.all(':controller/:action/:id');
};
