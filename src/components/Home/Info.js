import React from "react";
import { Link } from "gatsby";
import Title from '../Globals/Title';

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              commodo nulla facilisi nullam vehicula ipsum a. Suspendisse in est
              ante in nibh mauris cursus. Gravida neque convallis a cras semper
              auctor. Rhoncus aenean vel elit scelerisque. Habitant morbi
              tristique senectus et netus et malesuada fames ac. Faucibus
              pulvinar elementum integer enim neque volutpat ac tincidunt.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                About page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
