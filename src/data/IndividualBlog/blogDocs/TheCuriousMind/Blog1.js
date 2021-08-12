import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
export default function RyanBlog1() {
  return (
    <React.Fragment>
      <Grid item>
        <Typography component="p" style={{ fontSize: "18px" }}>
          I had to create a blog post to make sure things on this website are
          working properly before other content creators start to get involved.
          I’ll start off by explaining how I came to create this blog and finish
          with what you should expect to see in future posts. I’ll keep it short
          and simple since I have about a million different things to do on this
          site and in general.
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="p" style={{ fontSize: "18px" }}>
          I was never a good student, never mind interested in writing. Not
          until I started college back in 2017. I’m not exactly sure what it was
          that caused the change. Thousands of dollars on the line if I failed a
          class and had to retake it, the peer pressure of being criticized if I
          dropped out or didn’t do well? Maybe it was a combination of many
          things at once. As each year passed in my college career, I became
          more fascinated with learning thanks to many inspiring intellectuals.
          What sealed the deal on starting a blog came from the famous MIT
          professor, Patrick Winston, and his{" "}
          <a
            href="https://www.youtube.com/watch?v=Unzc731iCUY"
            rel="noreferrer"
            target="_blank"
          >
            video
          </a>{" "}
          he posted on YouTube. He explains how one of the most important skills
          in life is being able to articulate yourself, whether that be through
          speech or in written form.
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="p" style={{ fontSize: "18px" }}>
          What should the very few people (for now) reading these blogs expect
          to see in the future? As I alluded to before, my main goal is to
          improve my writing skills. There won’t be a specific category or genre
          for this blog, it will be whatever comes to mind and I feel passionate
          writing about. It could be anywhere from a short story to my thoughts
          and opinions on political issues. More importantly, I created this for
          myself to look back on and see how much I’ve improved. The absolute
          worst-case scenario is I have fun writing these and learn a lot. If
          others are interested and want to read too, great!
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="p" style={{ fontSize: "18px" }}>
          I’m excited to see where this takes me, and I can’t wait to transfer
          the thoughts in my curious mind to words on a screen.
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="p" style={{ fontSize: "18px" }}>
          <b><i>Random thought:</i></b> Aren’t we already performing a smaller version of what
          Neuralink is trying to do? Transferring our thoughts and life
          experiences to something most people hardly understand, the internet.
          Don’t we already have a microprocessor (or “a chip”) apart of us
          already? Think about the last time you didn’t have your phone near
          you. Yeah, I couldn’t remember either.
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
