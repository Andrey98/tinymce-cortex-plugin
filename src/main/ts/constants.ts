export const bodyStyles = `
.ML__keyboard {
  z-index: 2000 !important;
}`;

export const shadowRootStyles = `
slot {
  display: block !important;
}

.ML__keyboard-sink {
  display: none;
}`;

export const editorStyles = `
@font-face {
    font-display: "swap";
    font-family: KaTeX_AMS;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_AMS-Regular.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Caligraphic;
    font-style: normal;
    font-weight: 700;
    src: url(fonts/KaTeX_Caligraphic-Bold.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Caligraphic;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Caligraphic-Regular.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Fraktur;
    font-style: normal;
    font-weight: 700;
    src: url(fonts/KaTeX_Fraktur-Bold.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Fraktur;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Fraktur-Regular.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Main;
    font-style: italic;
    font-weight: 700;
    src: url(fonts/KaTeX_Main-BoldItalic.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Main;
    font-style: normal;
    font-weight: 700;
    src: url(fonts/KaTeX_Main-Bold.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Main;
    font-style: italic;
    font-weight: 400;
    src: url(fonts/KaTeX_Main-Italic.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Main;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Main-Regular.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 700;
    src: url(fonts/KaTeX_Math-BoldItalic.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 400;
    src: url(fonts/KaTeX_Math-Italic.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: "KaTeX_SansSerif";
    font-style: normal;
    font-weight: 700;
    src: url(fonts/KaTeX_SansSerif-Bold.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: "KaTeX_SansSerif";
    font-style: italic;
    font-weight: 400;
    src: url(fonts/KaTeX_SansSerif-Italic.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: "KaTeX_SansSerif";
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_SansSerif-Regular.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Script;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Script-Regular.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Size1;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Size1-Regular.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Size2;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Size2-Regular.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Size3;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Size3-Regular.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Size4;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Size4-Regular.woff2) format("woff2")
}

@font-face {
    font-display: "swap";
    font-family: KaTeX_Typewriter;
    font-style: normal;
    font-weight: 400;
    src: url(fonts/KaTeX_Typewriter-Regular.woff2) format("woff2")
}

:root {
    --ML__static-fonts: true
}

.ML__container {
    --_hue: var(--hue,212);
    --_placeholder-color: var(--placeholder-color,hsl(var(--_hue),40%,49%));
    --_placeholder-opacity: var(--placeholder-opacity,0.4);
    --_text-font-family: var(--text-font-family,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif);
    min-height: auto!important
}

.ML__sr-only {
    clip: rect(0,0,0,0);
    border: 0;
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px
}

.ML__base,.ML__is-inline {
    display: inline-block
}

.ML__base {
    border: 0;
    box-sizing: content-box;
    cursor: text;
    font-family: inherit;
    font-style: inherit;
    font-weight: inherit;
    margin: 0;
    outline: 0;
    padding: 0;
    position: relative;
    text-decoration: none;
    vertical-align: baseline;
    visibility: inherit;
    width: min-content
}

.ML__strut,.ML__strut--bottom {
    display: inline-block;
    min-height: 0.5em
}

.ML__small-delim {
    font-family: KaTeX_Main
}

.ML__text {
    font-family: var(--_text-font-family);
    white-space: pre
}

.ML__cmr {
    font-family: KaTeX_Main;
    font-style: normal
}

.ML__mathit {
    font-family: KaTeX_Math;
    font-style: italic
}

.ML__mathbf {
    font-family: KaTeX_Main;
    font-weight: 700
}

.lcGreek.ML__mathbf {
    font-family: KaTeX_Math;
    font-weight: 400
}

.ML__mathbfit {
    font-family: KaTeX_Math;
    font-style: italic;
    font-weight: 700
}

.ML__ams,.ML__bb {
    font-family: KaTeX_AMS
}

.ML__cal {
    font-family: KaTeX_Caligraphic
}

.ML__frak {
    font-family: KaTeX_Fraktur
}

.ML__tt {
    font-family: KaTeX_Typewriter
}

.ML__script {
    font-family: KaTeX_Script
}

.ML__sans {
    font-family: KaTeX_SansSerif
}

.ML__series_el,.ML__series_ul {
    font-weight: 100
}

.ML__series_l {
    font-weight: 200
}

.ML__series_sl {
    font-weight: 300
}

.ML__series_sb {
    font-weight: 500
}

.ML__bold,.ML__boldsymbol {
    font-weight: 700
}

.ML__series_eb {
    font-weight: 800
}

.ML__series_ub {
    font-weight: 900
}

.ML__series_uc {
    font-stretch: ultra-condensed
}

.ML__series_ec {
    font-stretch: extra-condensed
}

.ML__series_c {
    font-stretch: condensed
}

.ML__series_sc {
    font-stretch: semi-condensed
}

.ML__series_sx {
    font-stretch: semi-expanded
}

.ML__series_x {
    font-stretch: expanded
}

.ML__series_ex {
    font-stretch: extra-expanded
}

.ML__series_ux {
    font-stretch: ultra-expanded
}

.ML__it {
    font-style: italic
}

.ML__shape_ol {
    -webkit-text-stroke: 1px #000;
    text-stroke: 1px #000;
    color: transparent
}

.ML__shape_sc {
    font-variant: small-caps
}

.ML__shape_sl {
    font-style: oblique
}

.ML__emph {
    color: #bc2612
}

.ML__emph .ML__emph {
    color: #0c7f99
}

.ML__highlight {
    background: #edd1b0;
    color: #007cb2
}

.ML__center {
    text-align: center
}

.ML__label_padding {
    padding: 0 0.5em
}

.ML__frac-line {
    min-height: 1px;
    width: 100%
}

.ML__frac-line:after {
    background: currentColor;
    box-sizing: content-box;
    content: "";
    display: block;
    margin-top: max(-1px,-0.04em);
    min-height: max(1px,0.04em);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    transform: translate(0)
}

.ML__sqrt,.ML__sqrt-sign {
    display: inline-block
}

.ML__sqrt-sign {
    position: relative
}

.ML__sqrt-line {
    display: inline-block;
    height: max(1px,0.04em);
    width: 100%
}

.ML__sqrt-line:before {
    background: currentColor;
    content: "";
    display: block;
    margin-top: min(-1px,-0.04em);
    min-height: max(1px,0.04em);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    transform: translate(0)
}

.ML__sqrt-line:after {
    border-bottom-width: 1px;
    content: " ";
    display: block;
    margin-top: -0.1em
}

.ML__sqrt-index {
    margin-left: 0.27777778em;
    margin-right: -0.55555556em
}

.ML__delim-size1 {
    font-family: KaTeX_Size1
}

.ML__delim-size2 {
    font-family: KaTeX_Size2
}

.ML__delim-size3 {
    font-family: KaTeX_Size3
}

.ML__delim-size4 {
    font-family: KaTeX_Size4
}

.ML__delim-mult .delim-size1>span {
    font-family: KaTeX_Size1
}

.ML__delim-mult .delim-size4>span {
    font-family: KaTeX_Size4
}

.ML__accent-body>span {
    font-family: KaTeX_Main;
    width: 0
}

.ML__accent-vec {
    left: 0.24em;
    position: relative
}

.ML__mathlive {
    word-wrap: normal;
    direction: ltr;
    display: inline-block;
    font-family: KaTeX_Main,Times New Roman,serif;
    font-size-adjust: none;
    font-stretch: normal;
    font-style: normal;
    font-variant-caps: normal;
    letter-spacing: normal;
    line-height: 1.2;
    text-align: left;
    text-indent: 0;
    text-rendering: auto;
    text-shadow: none;
    -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: min-content;
    word-spacing: normal
}

.ML__mathlive .style-wrap {
    position: relative
}

.ML__mathlive .left-right,.ML__mathlive .mfrac {
    display: inline-block
}

.ML__mathlive .vlist-t {
    border-collapse: collapse;
    display: inline-table;
    table-layout: fixed
}

.ML__mathlive .vlist-r {
    display: table-row
}

.ML__mathlive .vlist {
    display: table-cell;
    position: relative;
    vertical-align: bottom
}

.ML__mathlive .vlist>span {
    display: block;
    height: 0;
    position: relative
}

.ML__mathlive .vlist>span>span {
    display: inline-block
}

.ML__mathlive .vlist>span>.pstrut {
    overflow: hidden;
    width: 0
}

.ML__mathlive .vlist-t2 {
    margin-right: -2px
}

.ML__mathlive .vlist-s {
    display: table-cell;
    font-size: 1px;
    min-width: 2px;
    vertical-align: bottom;
    width: 2px
}

.ML__mathlive .msubsup {
    text-align: left
}

.ML__mathlive .negativethinspace {
    display: inline-block;
    height: 0.71em;
    margin-left: -0.16667em
}

.ML__mathlive .thinspace {
    display: inline-block;
    height: 0.71em;
    width: 0.16667em
}

.ML__mathlive .mediumspace {
    display: inline-block;
    height: 0.71em;
    width: 0.22222em
}

.ML__mathlive .thickspace {
    display: inline-block;
    height: 0.71em;
    width: 0.27778em
}

.ML__mathlive .enspace {
    display: inline-block;
    height: 0.71em;
    width: 0.5em
}

.ML__mathlive .quad {
    display: inline-block;
    height: 0.71em;
    width: 1em
}

.ML__mathlive .qquad {
    display: inline-block;
    height: 0.71em;
    width: 2em
}

.ML__mathlive .llap,.ML__mathlive .rlap {
    display: inline-block;
    position: relative;
    width: 0
}

.ML__mathlive .llap>.inner,.ML__mathlive .rlap>.inner {
    position: absolute
}

.ML__mathlive .llap>.fix,.ML__mathlive .rlap>.fix {
    display: inline-block
}

.ML__mathlive .llap>.inner {
    right: 0
}

.ML__mathlive .rlap>.inner {
    left: 0
}

.ML__mathlive .rule {
    border: 0 solid;
    box-sizing: border-box;
    display: inline-block;
    position: relative
}

.ML__mathlive .overline .overline-line,.ML__mathlive .underline .underline-line {
    width: 100%
}

.ML__mathlive .overline .overline-line:before,.ML__mathlive .underline .underline-line:before {
    border-bottom-style: solid;
    border-bottom-width: max(1px,0.04em);
    content: "";
    display: block;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact
}

.ML__mathlive .overline .overline-line:after,.ML__mathlive .underline .underline-line:after {
    border-bottom-style: solid;
    border-bottom-width: max(1px,0.04em);
    content: "";
    display: block;
    margin-top: -1px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact
}

.ML__mathlive .stretchy {
    display: block;
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 100%
}

.ML__mathlive .stretchy:after,.ML__mathlive .stretchy:before {
    content: ""
}

.ML__mathlive .stretchy svg {
    fill: currentColor;
    stroke: currentColor;
    fill-rule: nonzero;
    fill-opacity: 1;
    stroke-width: 1;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-dashoffset: 0;
    stroke-opacity: 1;
    display: block;
    height: inherit;
    position: absolute;
    width: 100%
}

.ML__mathlive .slice-1-of-2 {
    left: 0
}

.ML__mathlive .slice-1-of-2,.ML__mathlive .slice-2-of-2 {
    display: inline-flex;
    overflow: hidden;
    position: absolute;
    width: 50.2%
}

.ML__mathlive .slice-2-of-2 {
    right: 0
}

.ML__mathlive .slice-1-of-3 {
    display: inline-flex;
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 25.1%
}

.ML__mathlive .slice-2-of-3 {
    display: inline-flex;
    left: 25%;
    overflow: hidden;
    position: absolute;
    width: 50%
}

.ML__mathlive .slice-3-of-3 {
    display: inline-flex;
    overflow: hidden;
    position: absolute;
    right: 0;
    width: 25.1%
}

.ML__mathlive .slice-1-of-1 {
    display: inline-flex;
    left: 0;
    overflow: hidden;
    position: absolute;
    width: 100%
}

.ML__mathlive .nulldelimiter,.ML__mathlive .op-group {
    display: inline-block
}

.ML__mathlive .op-symbol {
    position: relative
}

.ML__mathlive .op-symbol.small-op {
    font-family: KaTeX_Size1
}

.ML__mathlive .op-symbol.large-op {
    font-family: KaTeX_Size2
}

.ML__mathlive .mtable .vertical-separator {
    box-sizing: border-box;
    display: inline-block;
    min-width: 1px
}

.ML__mathlive .mtable .arraycolsep {
    display: inline-block
}

.ML__mathlive .mtable .col-align-m>.vlist-t {
    text-align: center
}

.ML__mathlive .mtable .col-align-c>.vlist-t {
    text-align: center
}

.ML__mathlive .mtable .col-align-l>.vlist-t {
    text-align: left
}

.ML__mathlive .mtable .col-align-r>.vlist-t {
    text-align: right
}

.ML__error {
    background-color: rgba(204,0,65,.1);
    background-image: radial-gradient(ellipse at center,#cc0041,transparent 70%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 3px 3px;
    display: inline-block;
    padding-bottom: 3px
}

.ML__error>.ML__error {
    background: transparent;
    padding: 0
}

.ML__placeholder {
    color: var(--_placeholder-color);
    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    opacity: var(--_placeholder-opacity);
    padding-left: 0.4ex;
    padding-right: 0.4ex
}

.ML__notation {
    box-sizing: border-box;
    line-height: 0;
    position: absolute
}

.ML__tooltip-container {
    position: relative;
    transform: scale(0)
}

.ML__tooltip-container .ML__tooltip-content {
    --_selection-color: #fff;
    background: #616161;
    border-radius: 8px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);
    color: #fff;
    display: inline-table;
    max-width: 400px;
    opacity: 0;
    padding: 12px;
    position: fixed;
    transition: opacity 0.15s cubic-bezier(0.4,0,1,1);
    visibility: hidden;
    width: max-content;
    z-index: 2
}

.ML__tooltip-container .ML__tooltip-content .ML__text {
    white-space: normal
}

.ML__tooltip-container .ML__tooltip-content .ML__base {
    display: contents
}

.ML__tooltip-container:hover .ML__tooltip-content {
    font-size: 0.75em;
    opacity: 1;
    transform: scale(1) translateY(3em);
    visibility: visible
}
@keyframes ML__caret-blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  .ML__container {
    display: inline-flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-end;
    min-height: 39px;
    /* Need some room for the virtual keyboard toggle */
    /* Encourage browsers to consider allocating a hardware accelerated
     layer for this element. */
    isolation: isolate;
    /* Prevent the browser from trying to interpret touch gestures in the field */
    /* "Disabling double-tap to zoom removes the need for browsers to
          delay the generation of click events when the user taps the screen." */
    touch-action: none;
    --_caret-color: var(--caret-color, hsl(var(--_hue), 40%, 49%));
    --_selection-color: var(--selection-color, #000);
    --_selection-background-color: var(--selection-background-color, hsl(var(--_hue), 70%, 85%));
    --_text-highlight-background-color: var(--highlight-text, hsla(var(--_hue), 40%, 50%, 0.1));
    --_contains-highlight-background-color: var(--contains-highlight-background-color, hsl(var(--_hue), 40%, 95%));
    --_smart-fence-color: var(--smart-fence-color, currentColor);
    --_smart-fence-opacity: var(--smart-fence-opacity, 0.5);
    --_latex-color: var(--latex-color, hsl(var(--_hue), 40%, 50%));
    --_correct-color: var(--correct-color, #10a000);
    --_incorrect-color: var(--incorrect-color, #a01b00);
    --_composition-background-color: var(--composition-background-color, #fff1c2);
    --_composition-text-color: var(--composition-text-color, black);
    --_composition-underline-color: var(--composition-underline-color, transparent);
  }
  /* This is the actual field content (formula) */
  .ML__content {
    display: flex;
    align-items: center;
    align-self: center;
    position: relative;
    overflow: hidden;
    padding: 2px 0 2px 1px;
    width: 100%;
  }
  .ML__virtual-keyboard-toggle {
    box-sizing: border-box;
    display: flex;
    align-self: center;
    align-items: center;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
    width: 34px;
    height: 34px;
    padding: 0;
    margin-right: 4px;
    cursor: pointer;
    /* Avoid some weird blinking with :hover */
    border-radius: 8px;
    border: 1px solid transparent;
    transition: background 0.2s cubic-bezier(0.64, 0.09, 0.08, 1);
    color: hsl(var(--_hue), 40%, 50%);
    fill: currentColor;
    background: transparent;
  }
  .ML__virtual-keyboard-toggle:hover {
    background: hsla(0, 0%, 70%, 0.3);
    color: #333;
    fill: currentColor;
  }
  .ML__virtual-keyboard-toggle > span {
    display: flex;
    align-self: center;
    align-items: center;
  }
  /* The invisible element used to capture keyboard events. We're just trying
   really hard to make sure it doesn't show. */
  .ML__keyboard-sink {
    display: inline-block;
    resize: none;
    outline: none;
    border: none;
    /* Need these for Microsoft Edge */
    position: fixed;
    clip: rect(0 0 0 0);
    /* Need this to prevent iOS Safari from auto-zooming */
    font-size: 1em;
    font-family: KaTeX_Main;
  }
  .ML__composition {
    background: var(--_composition-background-color);
    color: var(--_composition-text-color);
    text-decoration: underline var(--_composition-underline-color);
  }
  .ML__caret:after {
    content: '';
    border: none;
    border-radius: 2px;
    border-right: 2px solid var(--_caret-color);
    margin-right: -2px;
    position: relative;
    left: -1px;
    animation: ML__caret-blink 1.05s step-end forwards infinite;
  }
  .ML__text-caret:after {
    content: '';
    border: none;
    border-radius: 1px;
    border-right: 1px solid var(--_caret-color);
    margin-right: -1px;
    position: relative;
    left: 0;
    animation: ML__caret-blink 1.05s step-end forwards infinite;
  }
  .ML__latex-caret:after {
    content: '_';
    border: none;
    margin-right: 0;
    margin-right: calc(-1ex - 2px);
    position: relative;
    color: var(--_caret-color);
    animation: ML__caret-blink 1.05s step-end forwards infinite;
  }
  .ML__focused .ML__text {
    background: var(--_text-highlight-background-color);
  }
  /* When using smartFence, the anticipated closing fence is displayed
  with this style */
  .ML__smart-fence__close {
    opacity: var(--_smart-fence-opacity);
    color: var(--_smart-fence-color);
  }
  .ML__selected,
  .ML__focused .ML__selected .ML__contains-caret,
  .ML__focused .ML__selected .ML__smart-fence__close,
  .ML__focused .ML__selected .ML__placeholder {
    color: var(--_selection-color);
    opacity: 1;
  }
  :host(:focus) .ML__selection {
    box-sizing: border-box;
    background: var(--_selection-background-color) !important;
  }
  .ML__contains-caret.ML__close,
  .ML__contains-caret.ML__open,
  .ML__contains-caret > .ML__close,
  .ML__contains-caret > .ML__open,
  .ML__contains-caret .ML__sqrt-sign,
  .ML__contains-caret .ML__sqrt-line {
    color: var(--_caret-color);
  }
  .ML__contains-highlight {
    background: var(--_contains-highlight-background-color);
    box-sizing: border-box;
  }
  .ML__latex {
    font-family: 'Berkeley Mono', 'IBM Plex Mono', 'Source Code Pro', Consolas, 'Roboto Mono', Menlo, 'Bitstream Vera Sans Mono', 'DejaVu Sans Mono', Monaco, Courier, monospace;
    font-weight: 400;
    color: var(--_latex-color);
  }
  .ML__suggestion {
    opacity: 0.5;
  }
  .ML__virtual-keyboard-toggle.is-visible.is-pressed:hover {
    background: hsl(var(--_hue), 25%, 35%);
    color: #fafafa;
    fill: currentColor;
  }
  .ML__virtual-keyboard-toggle:focus {
    outline: none;
    border-radius: 8px;
    border: 2px solid hsl(var(--_hue), 40%, 50%);
  }
  .ML__virtual-keyboard-toggle.is-pressed,
  .ML__virtual-keyboard-toggle.is-active:hover,
  .ML__virtual-keyboard-toggle.is-active {
    background: hsl(var(--_hue), 25%, 35%);
    color: #fafafa;
    fill: currentColor;
  }
  /* Add an attribute 'data-ML__tooltip' to automatically show a
     tooltip over a element on hover.
     Use 'data-position="top"' to place the tooltip above the
     element rather than below.
     Use 'data-delay' to delay the triggering of the tooltip.
  */
  [data-ML__tooltip] {
    position: relative;
  }
  [data-ML__tooltip][data-placement='top']::after {
    top: inherit;
    bottom: 100%;
  }
  [data-ML__tooltip]::after {
    content: attr(data-ML__tooltip);
    position: absolute;
    display: none;
    z-index: 2;
    right: 110%;
    left: calc(100% + 8px);
    width: max-content;
    max-width: 200px;
    padding: 8px 8px;
    border-radius: 2px;
    background: #616161;
    color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    /* Phone */
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.15s cubic-bezier(0.4, 0, 1, 1);
  }
  @media only screen and (max-width: 767px) {
    [data-ML__tooltip]::after {
      padding: 8px 16px;
      font-size: 16px;
    }
  }
  :not(.tracking) [data-ML__tooltip]:hover {
    position: relative;
  }
  :not(.tracking) [data-ML__tooltip]:hover::after {
    visibility: visible;
    display: inline-table;
    opacity: 1;
    transform: scale(1);
  }
  [data-ML__tooltip][data-delay]::after {
    transition-delay: 0s;
  }
  [data-ML__tooltip][data-delay]:hover::after {
    transition-delay: 1s;
    /* attr(data-delay); Should work. But doesn't. */
  }
  .ML__prompt {
    border-radius: 2px;
  }
  .ML__editablePromptBox {
    outline: 1px solid #acacac;
    border-radius: 2px;
    z-index: -1;
  }
  .ML__focusedPromptBox {
    outline: highlight auto 1px;
  }
  .ML__lockedPromptBox {
    background-color: rgba(142, 142, 141, 0.4);
    z-index: -1;
  }
  .ML__correctPromptBox {
    outline: 1px solid var(--_correct-color);
    box-shadow: 0 0 5px var(--_correct-color);
  }
  .ML__incorrectPromptBox {
    outline: 1px solid var(--_incorrect-color);
    box-shadow: 0 0 5px var(--_incorrect-color);
  }
  .ML__selection {
    display: none;
  }
  .ML__hidden {
    display: none;
  }
  .ML__visible {
    display: initial !important;
  }
`;