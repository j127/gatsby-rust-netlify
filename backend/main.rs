use std::collections::HashMap;
use warp::Filter;

#[tokio::main]
async fn main() {
    // I don't think it's a good idea to listen to all routes on a cloud
    // function, but trying to use normal warp routes caused the entire function
    // to 404. It's something to try again later.
    // https://github.com/seanmonstar/warp/blob/master/examples/routing.rs
    // https://lib.rs/crates/warp_lambda
    let routes = warp::any().map(|| {
        let mut message = HashMap::new();
        message.insert("msg", "warp 🖖");
        warp::reply::json(&message)
    });

    let warp_service = warp::service(routes);

    warp_lambda::run(warp_service)
        .await
        .expect("an error occurred");
}
