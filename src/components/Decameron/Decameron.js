import React from "react";
import Styles from "./Styles";

function Decameron() {
  return (
    <>
      <Styles />
      <div className="dec-root">
        <article className="dec-page">

          {/* EPIGRAPH */}
          <p className="dec-epigraph">
            "A kindly thing it is to have compassion of the afflicted and albeit it
            well beseemeth every one, yet of those is it more particularly
            required who have erst had need of comfort and have found it in any,
            amongst whom, if ever any had need thereof or held it dear or took
            pleasure therein aforetimes, certes, I am one of these." 
          </p>
          <p >
     
     Opening of The Decameron by Giovanni Boccaccio

          </p>


   
          {/* DIVIDER */}
          <hr className="dec-rule" />
          {/* BODY TEXT */}
          <p>
            Last year, the Italian classic The Decameron magically ended
            up in my phone library (I truly can't remember how). 
            </p>
            <p>  I decided to give
            it a try, only to realise I couldn't get past the opening pages. The
            mix of unfamiliar words and old times writing style made the ideas
            ungraspable, despite reading them multiple times.
          </p>

          <p>
            Shortly after and to a lesser degree, I had a similar experience with
            Shakespeare's Romeo and Juliet.
          </p>

          <p>
            Because of this, I wanted to build a solution to
            to read above my level. 
          </p>
          <p>
            
            Truth to its origins, I am calling it Decameron.    </p>
            
            
  

          <p>
            The basics: select a word, sentence or paragraph that calls for an
            explanation, tap the button to explain, and AI formulates an
            explanation in modern English for the user to understand.
          </p>

          <p>
            Why not just grab a dictionary or put more effort
            into it? 
          </p>
            
          <p>
            
            That's a solution too, but the difficulty of this might be
            the reason the classics feel so intimidating for the average reader
            like me.
          </p>

          <p>
            Would this not make readers dependent on using this
            app to dumb everything down? 
          </p>

          <p>
            It could, but I see this more as those
            extra wheels that kids use to learn how to ride a bike. 
            </p>
            <p>
            Without them,
            some will learn to ride a bike anyways but many will drop out. With them, we can
            all learn how to ride.
          </p>

          <p>
            Best case scenario, this app is able to bridge the knowledge
            gap that many readers need to access the classics, or any other
            difficult book of their wish.
          </p>

          <p>
            Worst case, I am the only user, but at least I'll be able to read The Decameron from start to finish,
            which I'd call an absolute success. 
          </p>
            

          <p>

            And who knows what
            treasures I will find in Boccaccio's world?
          </p>


          <p className="dec-contact-line">
            For feedback or to be one among the first testers,
            reach out at{" "}
            <a href="mailto:inbox@wilfredocasas.com">inbox@wilfredocasas.com</a>
          </p>

          <p>3rd of April of 2026</p>

      {/* PHONE MOCKUPS */}
<div className="dec-phones">

  <div className="dec-phone-wrap">
    <div className="dec-phone">
      <div className="dec-phone-notch" />
      <div className="dec-phone-screen">
        <p className="dec-phone-book-title">The Decameron · Boccaccio</p>
        <p className="dec-phone-text">
          A kindly thing it is to have compassion of the afflicted and
          albeit it well beseemeth every one, yet of those is it more
          particularly required who have{" "}
          <span className="dec-phone-highlight">
            erst had need of comfort
            <span className="dec-phone-tooltip">
              <span className="dec-magic-icon">✦</span>
              Explain this
            </span>
          </span>{" "}
          and have found it in any, amongst whom, certes, I am one of these.
        </p>
      </div>
    </div>
  </div>

  <div className="dec-phone-wrap">
    <div className="dec-phone">
      <div className="dec-phone-notch" />
      <div className="dec-phone-screen">
        <p className="dec-phone-book-title">The Decameron · Boccaccio</p>
        <p className="dec-phone-text">
          A kindly thing it is to have compassion of the afflicted and
          albeit it well beseemeth every one, yet of those is it more
          particularly required who have{" "}
          <span className="dec-phone-highlight">erst had need of comfort</span>
          <span className="dec-phone-text-faded">
            {" "}and have found it in any, amongst whom, certes, I am one of these.
          </span>
        </p>
        <div className="dec-sheet">
          <div className="dec-sheet-handle" />
          <p className="dec-sheet-selected">"erst had need of comfort"</p>
          <div className="dec-sheet-divider" />
          <p className="dec-sheet-explanation">
            <span className="dec-magic-icon-inline">✦</span>{" "}
            <em>Once needed comfort</em> — "erst" is an old word meaning "formerly." Those who have, at some point in their lives, desperately needed comfort from others.
          </p>
        </div>
      </div>
    </div>
  </div>

</div>


          {/* CONTACT */}

       

        </article>
      </div>
    </>
  );
}

export default Decameron;