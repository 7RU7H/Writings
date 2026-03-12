// cosmic hack session
// JAVASCRIPT IS EVIL!!!!!!!!!!!!!!!!
// Chat-gepeto inital prompt for a 1-3 second loop that is a motif
setcps(145/60)

// kick + psy bass
$: stack(
  s("bd*4")
  .gain(1.1)
  .lpf(120),

  n("<0 0 0 0 2 0 3 0>")
  .s("sawtooth")
  .lpf(200)
  .distort(0.4)
  .gain(0.8)
  .legato(1)
)

// psy lead sequence (Blastoyz-ish energy)
$: note("<e4 g4 b4 d5>*2 <e4 g4 a4 c5>*2")
  .s("supersaw")
  .room(0.6)
  .size(0.9)
  .delay(0.25)
  .gain(0.7)
  .fast(2)

// shpongly textures
$: s("tabla:2 tabla:4 cosmic:1 cosmic:3")
  .slow(2)
  .room(0.8)
  .size(0.95)
  .gain(0.6)
  .pan(sine.range(0,1))

// universe hacking glitches
$: s("glitch*8")
  .every(3, rev)
  .every(5, fast(2))
  .degradeBy(0.25)
  .gain(0.7)

// parody sci-fi voices (safe knock-offs)
$: s("madscientist_nephew time_doctor_shell bounty_space_jazz")
  .slow(4)
  .room(0.9)
  .size(1)
  .distort(0.2)
  .pan(rand)

// matrix-like data stream
$: n(run(16))
  .s("bleep")
  .scale("chromatic")
  .fast(4)
  .gain(0.5)
  .lpf(sine.range(400,4000))

// universe collapse / rebuild
$: s("impact*2")
  .every(4, fast(4))
  .room(1)
  .size(1)
  .gain(0.8)
