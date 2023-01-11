import React, { Component } from "react";
class Home extends Component {
  state = {};
  render() {
    return (
      <main>
        <h1>Proyectos</h1>

        <div class="card-group mx-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Proyecto</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <button class="btn btn-xs mx-auto  btn-primary" type="submit">
              Ver proyecto
            </button>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Proyecto</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <button class="btn btn-xs mx-auto  btn-primary" type="submit">
              Ver proyecto
            </button>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Proyecto</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <button class="btn btn-xs mx-auto  btn-primary" type="submit">
              Ver proyecto
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
