use warp::Filter;

#[tokio::main]
async fn main() {
    let routes = warp::any().map(|| "{\"msg\": \"x warp 🖖\"}");

    let warp_service = warp::service(routes);

    warp_lambda::run(warp_service)
        .await
        .expect("an error occurred");
}
