use warp::Filter;
use std::collections::HashMap;


#[tokio::main]
async fn main() {
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
