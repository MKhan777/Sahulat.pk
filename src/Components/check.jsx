import React, { Component } from "react";
import "../CSS/check_page.css"
class check extends Component {
  state = {
      isActive:'false'
  };
    changeClass=() =>{
    this.setState({isActive : !this.state.isActive});
      
  }
  render() {
    return (
      <div className={this.state.isActive ? 'open' : ''}>
        <button className="menu-toggle" onClick={this.changeClass}/>
        <nav className="navigator">
          <ul className="menu">
            <li data-text="Home">Home</li>
            <li data-text="Projects">Projects</li>
            <li data-text="About">About</li>
            <li data-text="Contact">Contact</li>
          </ul>
        </nav>
        <article>
          <h1>This is an Article About Something</h1>
          <h3>by Lauren Ipsum</h3>
          <p>
            <span>
              Toggle the menu by clicking on the infamous hamburger icon in the
              top left corner! It could be the most fun you will ever have.
            </span>
          </p>
          <p>
            Maybe it was the other George Michael. You know, the
            singer-songwriter. This was a big get for God. I'm a scholar. I
            enjoy scholarly pursuits. Suddenly playing with yourself is a
            scholarly pursuit? Wow. We're just blowing through nap time, aren't
            we? I need a fake passport, preferably to France… I like the way
            they think. Butterscotch! Want a lick?
          </p>
          <p>
            I made a huge tiny mistake. What's gotten into you? Have you been
            eating cheese? One of the guys told me to take my head out of my
            BOTTOM and get back to work…my BOTTOM! Hahahaha. Go ahead, touch the
            Cornballer. She's always got to wedge herself in the middle of us so
            that she can control everything. Yeah. Mom's awesome.
          </p>
          <p>
            No, no, it's pronounced a-nal-ra-pist. It wasn't really the
            pronunciation that bothered me. Heyyyyyy, Uncle Father Oscar. Are
            you at all concerned about an uprising? I know what an erection
            feels like, Michael. We need a name. Maybe 'Operation Hot Mother'. A
            flower in my garden, a mystery in my panties. She's not that
            Mexican, Mom. She's my Mexican. And she's Columbian or something.
          </p>
          <p>
            Well excuse me, Judge Reinhold. Well excuse me, Judge Reinhold! I
            could use a leather jacket for when I'm on my hog and have to go
            into a controlled slide. Happy. Family Love Michael. That's my son,
            you pothead! I'll sacrifice anything for my children. There's a new
            daddy in town. A discipline daddy.
          </p>
          <p>
            I deceived you, mom. Tricked makes it sound like we have a playful
            relationship. That coat costs more than your house! I've got a nice
            hard cot with his name on it. You'd do that to your own brother? I
            said "cot." The only thing I found in the fridge was a dead dove in
            a bag. Gob: You didn't eat that, did you?
          </p>
        </article>
      </div>
    );
  }
}

export default check;
