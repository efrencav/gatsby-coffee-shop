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
              Sociis natoque penatibus et magnis. Integer malesuada nunc vel
              risus commodo. Volutpat commodo sed egestas egestas. Mauris sit
              amet massa vitae tortor. Nulla facilisi etiam dignissim diam.
              Sapien pellentesque habitant morbi tristique. Velit laoreet id
              donec ultrices tincidunt. Ultrices vitae auctor eu augue.
              Malesuada proin libero nunc consequat interdum varius. Blandit
              aliquam etiam erat velit scelerisque. Amet commodo nulla facilisi
              nullam vehicula ipsum a arcu. Convallis aenean et tortor at risus
              viverra adipiscing. Aliquam sem fringilla ut morbi tincidunt augue
              interdum velit euismod. Pellentesque adipiscing commodo elit at.
              Sed faucibus turpis in eu mi bibendum neque. At quis risus sed
              vulputate odio ut enim blandit. Lacus vel facilisis volutpat est
              velit egestas. Mauris vitae ultricies leo integer malesuada nunc.
              Turpis egestas integer eget aliquet. Hendrerit dolor magna eget
              est. Tincidunt praesent semper feugiat nibh sed pulvinar proin
              gravida hendrerit. Amet cursus sit amet dictum sit. Orci nulla
              pellentesque dignissim enim sit amet venenatis. Ut sem nulla
              pharetra diam sit amet nisl. Sed risus pretium quam vulputate
              dignissim suspendisse. Aenean euismod elementum nisi quis eleifend
              quam adipiscing. Id aliquet lectus proin nibh nisl. Iaculis at
              erat pellentesque adipiscing commodo. Augue neque gravida in
              fermentum et. Venenatis urna cursus eget nunc scelerisque viverra
              mauris in aliquam. Aenean pharetra magna ac placerat vestibulum
              lectus mauris. Fermentum odio eu feugiat pretium nibh ipsum
              consequat. Id interdum velit laoreet id donec. Viverra justo nec
              ultrices dui sapien eget mi proin sed.
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
