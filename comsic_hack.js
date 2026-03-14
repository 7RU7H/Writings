// cosmic hack session
// JAVASCRIPT IS EVIL!!!!!!!!!!!!!!!!
// Chat-gepeto inital prompt for a 1-3 second loop that is a motif
// Cleaned up and made a function - not bothering with prompt crafting
// === Universe Hack Track Generator ===
const universeHack = ({
  bpm = 145,
  intensity = 1,
  glitch = 0.25
} = {}) => {

  setcps(bpm/60)

  // psy kick + bass engine
  const engine = stack(
    s("bd*4")
      .gain(1.1 * intensity)
      .lpf(120),

    n("<0 0 0 0 2 0 3 0>")
      .s("sawtooth")
      .lpf(200)
      .distort(0.4)
      .legato(1)
      .gain(0.8 * intensity)
  )

  // psy lead
  const lead = note("<e4 g4 b4 d5>*2 <e4 g4 a4 c5>*2")
    .s("supersaw")
    .fast(2)
    .delay(0.25)
    .room(0.6)
    .size(0.9)
    .gain(0.7 * intensity)

  // psychedelic percussion
  const perc = s("tabla:2 tabla:4 cosmic:1 cosmic:3")
    .slow(2)
    .room(0.8)
    .size(0.95)
    .pan(sine.range(0,1))
    .gain(0.6)

  // universe glitch layer
  const hack = s("glitch*8")
    .every(3, rev)
    .every(5, fast(2))
    .degradeBy(glitch)
    .gain(0.7)

  // parody sci-fi voices
  const voices = s("madscientist_nephew time_doctor_shell bounty_space_jazz")
    .slow(4)
    .room(0.9)
    .size(1)
    .pan(rand)
    .distort(0.2)

  // data stream
  const data = n(run(16))
    .s("bleep")
    .scale("chromatic")
    .fast(4)
    .lpf(sine.range(400,4000))
    .gain(0.5)

  return stack(engine, lead, perc, hack, voices, data)
}

// run it
$: universeHack()

// example variations
// $: universeHack({ bpm:148, intensity:1.2, glitch:0.4 })
//
//

// Want to simulate the sound of atoms dying in space
sound("noise")
  .decay(0.2)
  .gain(0.7)
  .room(0.9)
  .size(0.95)
  .speed("1.5 0.8 2")

// Got particle bursts from same prompt as ADiS
stack(
  sound("noise").decay(0.1).gain(0.5),
  sound("click").speed("2 3 5").gain(0.3)
)
.room(0.95)
.size(1)

// Quantum / Glitch sound also with ADiS
sound("noise")
  .lpf(range(200,4000).slow(4))
  .speed(irand(4))
  .decay(0.15)
  .room(0.9)
