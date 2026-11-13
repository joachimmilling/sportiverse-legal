/* @ds-bundle: {"format":4,"namespace":"Sportiverse","components":[{"name":"Logo"},{"name":"Icon"},{"name":"EventIcon"},{"name":"Glyph"},{"name":"Scene"},{"name":"LaunchScreen"},{"name":"LiquidMark"},{"name":"LiquidReveal"},{"name":"Button"},{"name":"IconButton"},{"name":"Chip"},{"name":"ToggleButton"},{"name":"Switch"},{"name":"Input"},{"name":"Card"},{"name":"SectionHeader"},{"name":"ListRow"},{"name":"Skeleton"},{"name":"EmptyState"},{"name":"LogoImage"},{"name":"ProfileAvatar"},{"name":"DetailHeader"},{"name":"DetailTabs"},{"name":"TabBar"},{"name":"PlayerMatchRating"},{"name":"StatBar"},{"name":"ResultsRow"},{"name":"CharacteristicsRadar"},{"name":"LiveTimer"},{"name":"PredictionBar"},{"name":"MatchListItem"},{"name":"MatchCompetitionSection"},{"name":"MatchDetailHeader"},{"name":"MatchEventItem"},{"name":"MomentumChart"},{"name":"WinProbabilityChart"},{"name":"FormationDisplay"},{"name":"MatchLiveActivity"},{"name":"FeedItemCard"},{"name":"ReactionChips"},{"name":"LeagueStandings"}]} */
(() => {
  // src2/assets.js
  var SWIRL = "M506.5 859.3C376.9 853.2 257.8 779.1 186.4 660.3C168.8 631 152.9 595.6 142.6 563C138.4 549.7 133 529.9 133 528C133 527.4 138.2 525 139.6 525C139.7 525 141 528.9 142.5 533.8C158.6 588.1 184 637 218.2 679.2C229.8 693.6 256.3 720 270.5 731.3C323.7 773.9 382.5 797.6 445.7 802.1C478.5 804.4 510.6 800.4 542.1 790C575.9 778.9 604.9 761.4 628.6 737.6C661.1 705 679.2 666.7 683.2 622.2C686.4 585.6 676.1 544.4 655.9 513.5C649 502.9 631.7 485.8 621.7 479.6C590.4 460.1 552.8 461.7 529.4 483.4C525.6 486.9 520.8 492.6 518.8 496.1C516.7 499.6 515 502.1 515 501.8C515 499.6 521.5 483.7 525.4 476.5C544.9 439.8 578.6 415.9 621.4 408.5C631.7 406.7 654.8 406.5 665.3 408.1C720.7 416.4 768.7 452.8 795 506.5C817.1 551.6 821.8 603.2 808.6 655.4C790.2 727.8 737.3 790.7 664.5 826.5C624.5 846.2 586 856.2 539.5 859C523.2 859.9 519.9 860 506.5 859.3ZM356 615.6C280.3 602.2 223.2 540 210.4 456.9C207.9 441.2 207.9 409.8 210.3 394C218.6 339.7 243.5 291.5 283.6 251.5C358 177.4 471.4 147.9 583 173.7C682.4 196.6 770.3 259.6 829.2 350C844.5 373.4 859.6 402.4 869.6 427.5C879.9 453.6 892.4 495.1 890.4 496.9C889.9 497.4 888.3 498 886.8 498.4C884.3 499 884 498.7 883 494.8C877.9 475.9 866.5 445.4 856.6 424.7C814 335.4 739.9 266.6 655 237.5C595.2 217.1 535.6 216 480.4 234.4C435 249.6 396.6 278 371.9 314.9C340 362.3 332 418.8 349.6 471.9C361.4 507.4 383.6 535.3 410.7 548.9C422.2 554.6 431.5 557.1 444.6 557.7C458.4 558.4 467.9 556.5 479.8 550.9C490.5 545.7 501.4 535.7 506.1 526.5C508 523 509.6 520.3 509.8 520.4C510.5 521.1 504.3 536.4 499.4 546C481.4 581.2 449.3 605.5 409 614.5C398.9 616.8 366.4 617.4 356 615.6Z";
  var WORD = { d: "M269 12Q179 12 112.5 -30.5Q46 -73 22 -145L132 -197Q153 -153 189 -128Q225 -103 269 -103Q301 -103 318 -116Q335 -129 335 -152Q335 -164 329 -172.5Q323 -181 311 -188Q299 -195 281 -200L188 -226Q121 -245 85 -287.5Q49 -330 49 -388Q49 -439 75 -477Q101 -515 148 -536.5Q195 -558 256 -558Q336 -558 396.5 -520.5Q457 -483 482 -415L371 -363Q359 -397 327.5 -417.5Q296 -438 256 -438Q227 -438 210.5 -426Q194 -414 194 -393Q194 -382 200 -373Q206 -364 219.5 -357Q233 -350 253 -344L340 -318Q408 -298 444 -257.5Q480 -217 480 -158Q480 -107 453.5 -69Q427 -31 380 -9.5Q333 12 269 12ZM530 200V-546H670V-442L657 -472Q684 -513 730.5 -535.5Q777 -558 837 -558Q915 -558 978 -520Q1041 -482 1078 -417.5Q1115 -353 1115 -273Q1115 -194 1078.5 -129Q1042 -64 979 -26Q916 12 836 12Q780 12 732.5 -8.5Q685 -29 656 -69L680 -100V200ZM818 -123Q860 -123 892 -142Q924 -161 942 -195Q960 -229 960 -273Q960 -317 942 -350.5Q924 -384 892 -403.5Q860 -423 818 -423Q778 -423 746.5 -404Q715 -385 697.5 -351Q680 -317 680 -273Q680 -229 697.5 -195Q715 -161 746.5 -142Q778 -123 818 -123ZM1434 12Q1353 12 1286.5 -25Q1220 -62 1180.5 -126.5Q1141 -191 1141 -273Q1141 -356 1180.5 -420Q1220 -484 1286.5 -521Q1353 -558 1434 -558Q1515 -558 1581 -521Q1647 -484 1686.5 -420Q1726 -356 1726 -273Q1726 -191 1686.5 -126.5Q1647 -62 1581 -25Q1515 12 1434 12ZM1434 -123Q1475 -123 1505.5 -142Q1536 -161 1553.5 -195Q1571 -229 1571 -273Q1571 -317 1553.5 -350.5Q1536 -384 1505.5 -403.5Q1475 -423 1434 -423Q1393 -423 1362 -403.5Q1331 -384 1313.5 -350.5Q1296 -317 1296 -273Q1296 -229 1313.5 -195Q1331 -161 1362 -142Q1393 -123 1434 -123ZM1774 0V-546H1914V-415L1904 -434Q1922 -503 1963.5 -527.5Q2005 -552 2062 -552H2094V-422H2047Q1992 -422 1958 -388.5Q1924 -355 1924 -294V0ZM2383 6Q2284 6 2229.5 -47.5Q2175 -101 2175 -197V-416H2083V-546H2088Q2130 -546 2152.5 -567Q2175 -588 2175 -630V-670H2325V-546H2453V-416H2325V-207Q2325 -179 2335 -160.5Q2345 -142 2366 -133Q2387 -124 2418 -124Q2425 -124 2434 -125Q2443 -126 2453 -127V0Q2438 2 2419 4Q2400 6 2383 6ZM2501 0V-546H2651V0ZM2501 -595V-745H2651V-595ZM2892 0 2677 -546H2839L2988 -133H2926L3075 -546H3237L3022 0ZM3526 12Q3439 12 3375 -26.5Q3311 -65 3276 -130Q3241 -195 3241 -274Q3241 -356 3277.5 -420Q3314 -484 3376 -521Q3438 -558 3516 -558Q3581 -558 3631 -537.5Q3681 -517 3715.5 -480Q3750 -443 3768 -394.5Q3786 -346 3786 -289Q3786 -273 3784.5 -257.5Q3783 -242 3779 -231H3370V-341H3694L3623 -289Q3633 -332 3622 -365.5Q3611 -399 3583.5 -418.5Q3556 -438 3516 -438Q3477 -438 3449 -419Q3421 -400 3407 -363Q3393 -326 3396 -273Q3392 -227 3407 -192Q3422 -157 3453 -137.5Q3484 -118 3528 -118Q3568 -118 3596.5 -134Q3625 -150 3641 -178L3761 -121Q3745 -81 3710.5 -51Q3676 -21 3629 -4.5Q3582 12 3526 12ZM3834 0V-546H3974V-415L3964 -434Q3982 -503 4023.5 -527.5Q4065 -552 4122 -552H4154V-422H4107Q4052 -422 4018 -388.5Q3984 -355 3984 -294V0ZM4394 12Q4304 12 4237.5 -30.5Q4171 -73 4147 -145L4257 -197Q4278 -153 4314 -128Q4350 -103 4394 -103Q4426 -103 4443 -116Q4460 -129 4460 -152Q4460 -164 4454 -172.5Q4448 -181 4436 -188Q4424 -195 4406 -200L4313 -226Q4246 -245 4210 -287.5Q4174 -330 4174 -388Q4174 -439 4200 -477Q4226 -515 4273 -536.5Q4320 -558 4381 -558Q4461 -558 4521.5 -520.5Q4582 -483 4607 -415L4496 -363Q4484 -397 4452.5 -417.5Q4421 -438 4381 -438Q4352 -438 4335.5 -426Q4319 -414 4319 -393Q4319 -382 4325 -373Q4331 -364 4344.5 -357Q4358 -350 4378 -344L4465 -318Q4533 -298 4569 -257.5Q4605 -217 4605 -158Q4605 -107 4578.5 -69Q4552 -31 4505 -9.5Q4458 12 4394 12ZM4918 12Q4831 12 4767 -26.5Q4703 -65 4668 -130Q4633 -195 4633 -274Q4633 -356 4669.5 -420Q4706 -484 4768 -521Q4830 -558 4908 -558Q4973 -558 5023 -537.5Q5073 -517 5107.5 -480Q5142 -443 5160 -394.5Q5178 -346 5178 -289Q5178 -273 5176.5 -257.5Q5175 -242 5171 -231H4762V-341H5086L5015 -289Q5025 -332 5014 -365.5Q5003 -399 4975.5 -418.5Q4948 -438 4908 -438Q4869 -438 4841 -419Q4813 -400 4799 -363Q4785 -326 4788 -273Q4784 -227 4799 -192Q4814 -157 4845 -137.5Q4876 -118 4920 -118Q4960 -118 4988.5 -134Q5017 -150 5033 -178L5153 -121Q5137 -81 5102.5 -51Q5068 -21 5021 -4.5Q4974 12 4918 12Z", x0: 22, x1: 5178, top: 745, bottom: -200, xh: 546, upm: 1e3 }, LOCK = { mh: 1037.3999999999999, s: 1.4905172413793102, mw: 1129.812068965517, gap: 338.52, cy: -273, top: -791.6999999999999, bot: 245.69999999999993, xw: 1446.332068965517, W: 6624.3320689655175 }, EVENTS = { icons: { whistle: '<circle fill="currentColor" cx="9.5" cy="14.5" r="1.9"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M9.5 8H20a1.5 1.5 0 0 1 1.5 1.5V11a1.5 1.5 0 0 1-1.5 1.5h-4.32A6.5 6.5 0 1 1 9.5 8Z"/><circle fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" cx="4.4" cy="5.4" r="1.9"/>', goal: '<defs><clipPath id="{u}c"><circle cx="12" cy="12" r="9.1"/></clipPath></defs><g clip-path="url(#{u}c)"><path d="M14.02 12.69L9.52 10.42L6.08 13.88L8.46 18.28L13.37 17.54Z" fill="currentColor" stroke="currentColor" stroke-width="0.6" stroke-linejoin="round"/><path d="M7.02 21.42L3.20 20.16L4.30 21.78L8.80 24.04L10.48 23.82Z" fill="currentColor" stroke="currentColor" stroke-width="0.6" stroke-linejoin="round"/><path d="M1.87 7.90L0.19 8.12L-0.46 12.97L0.82 15.75L2.26 12.61Z" fill="currentColor" stroke="currentColor" stroke-width="0.6" stroke-linejoin="round"/><path d="M20.95 17.49L16.83 19.95L15.39 23.09L18.62 22.57L22.05 19.12Z" fill="currentColor" stroke="currentColor" stroke-width="0.6" stroke-linejoin="round"/><path d="M11.97 0.47L7.06 1.21L5.31 4.44L9.13 5.70L13.25 3.25Z" fill="currentColor" stroke="currentColor" stroke-width="0.6" stroke-linejoin="round"/><path d="M20.98 5.00L17.75 5.51L18.14 10.23L21.60 12.64L23.36 9.40Z" fill="currentColor" stroke="currentColor" stroke-width="0.6" stroke-linejoin="round"/><path d="M-0.46 12.97L0.82 15.75M-0.46 12.97L0.19 8.12M0.82 15.75L3.20 20.16M0.82 15.75L2.26 12.61M0.19 8.12L1.87 7.90M3.20 20.16L7.02 21.42M2.26 12.61L1.87 7.90M2.26 12.61L6.08 13.88M1.87 7.90L5.31 4.44M7.02 21.42L10.48 23.82M7.02 21.42L8.46 18.28M6.08 13.88L8.46 18.28M6.08 13.88L9.52 10.42M5.31 4.44L7.06 1.21M5.31 4.44L9.13 5.70M10.48 23.82L15.39 23.09M8.46 18.28L13.37 17.54M7.06 1.21L11.97 0.47M9.52 10.42L9.13 5.70M9.52 10.42L14.02 12.69M9.13 5.70L13.25 3.25M15.39 23.09L18.62 22.57M15.39 23.09L16.83 19.95M13.37 17.54L14.02 12.69M13.37 17.54L16.83 19.95M11.97 0.47L13.25 3.25M11.97 0.47L15.20 -0.04M14.02 12.69L18.14 10.23M13.25 3.25L17.75 5.51M18.62 22.57L22.05 19.12M16.83 19.95L20.95 17.49M15.20 -0.04L19.70 2.22M18.14 10.23L17.75 5.51M18.14 10.23L21.60 12.64M17.75 5.51L20.98 5.00M22.05 19.12L20.95 17.49M20.95 17.49L21.60 12.64M19.70 2.22L20.98 5.00M21.60 12.64L23.36 9.40M20.98 5.00L23.36 9.40" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></g><circle fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" cx="12" cy="12" r="9.1"/>', offside: '<rect fill="currentColor" x="4.5" y="3.8" width="7.2" height="4.7" rx="0"/><rect fill="currentColor" x="11.6" y="8.5" width="7.2" height="4.7" rx="0"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4.5 21.5V3"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4.5 3.8h13.3a1 1 0 0 1 1 1v7.4a1 1 0 0 1-1 1H4.5"/>', "yellow-card": '<rect fill="currentColor" x="6.5" y="3" width="11" height="16" rx="2" transform="rotate(10 12.0 11.0)"/>', "red-card": '<rect fill="currentColor" x="6.5" y="3" width="11" height="16" rx="2" transform="rotate(10 12.0 11.0)"/>', "free-kick": '<circle fill="currentColor" cx="4.6" cy="19.2" r="2.1"/><path fill="currentColor" d="M18.4 2.6l4.3 1.9-3.3 3.4Z"/><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M11 14v7M14.5 14v7M18 14v7"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M6 15.8C7.5 9.2 12.5 5.2 19.7 4.5"/>', penalty: '<circle fill="currentColor" cx="12" cy="18.8" r="2"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M3 13V5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5V13"/><path fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" d="M8.3 4v5.6M12 4v5.6M15.7 4v5.6M3 8.4h18"/>', corner: '<path fill="currentColor" d="M5.9 2.9a.6.6 0 0 1 .8-.5l11.6 4.5a.6.6 0 0 1 0 1.1L6.7 12.6a.6.6 0 0 1-.8-.5Z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M5 21.5V2.8"/><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M5 15.5a6 6 0 0 1 6 6"/><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M5 21.5h15.5"/>', "goal-kick": '<path fill="currentColor" d="M17.6 2.4l4.5 1.6-3.1 3.6Z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M2.5 21.5v-7h12v7"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M8.5 18C10 10.5 13.6 5.4 18.8 4.4"/>', substitution: '<rect fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" x="2.5" y="3" width="19" height="12.5" rx="3"/><path fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M12 15.5v6"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M8.5 12.2V6.4M6.2 8.6l2.3-2.3 2.3 2.3"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M15.5 6.3v5.8M13.2 9.9l2.3 2.3 2.3-2.3"/>' }, colors: { "yellow-card": "var(--yellow-card)", "red-card": "var(--red-card)" }, order: ["whistle", "goal", "offside", "yellow-card", "red-card", "free-kick", "penalty", "corner", "goal-kick", "substitution"] }, SPRINGS = { smooth: { damping: 26, stiffness: 170 }, snappy: { damping: 26, stiffness: 300 }, bouncy: { damping: 20, stiffness: 260 }, jelly: { damping: 16, stiffness: 240 } };

  // src2/icons_line.js
  var P = (d) => '<path pathLength="1" d="' + d + '"/>', C = (cx2, cy, r) => '<circle pathLength="1" cx="' + cx2 + '" cy="' + cy + '" r="' + r + '"/>', DOT = (cx2, cy, r) => '<circle class="f" cx="' + cx2 + '" cy="' + cy + '" r="' + r + '"/>', LINE_ICONS = {
    club: { b: P("M12 2.9 19.4 5.6v5.6c0 4.8-3.1 8.4-7.4 9.9-4.3-1.5-7.4-5.1-7.4-9.9V5.6Z"), a: P("M8.6 9.6 12 12.2l3.4-2.6") },
    league: { b: P("M17.8 5.6c-.2 2.4-.6 4.4-1.6 6-1.2 2-3.2 3.1-5 2.7-2.3-.5-3.9-3.4-5.2-10.1") + P("M6.6 6.4H5.2a1.5 1.5 0 0 0-.4 2.9l2.4.9M17.6 7.3h1.4a1.6 1.6 0 0 1 .3 3.2l-2.6.6") + P("M11.2 14.4v3.9M7.9 20.4h6.8"), a: P("M6 4.2 17.8 5.6") },
    match: { b: C(8.8, 12, 5.8), a: C(15.2, 12, 5.8) },
    lineup: { b: P("M6 3.5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z") + P("M4 12h16") + C(12, 12, 2.6), a: DOT(8, 7.6, 1.15) + DOT(12, 6.6, 1.15) + DOT(16, 7.6, 1.15) },
    player: { b: P("M8.2 3.5 4 5.4 2.8 9.6 6 11v9.5h12V11l3.2-1.4L20 5.4l-4.2-1.9c-.5 1.4-2 2.3-3.8 2.3s-3.3-.9-3.8-2.3Z"), a: P("M10.3 10.4h3.4l-2 5") },
    coach: { b: P("M8 4.5H6a1.5 1.5 0 0 0-1.5 1.5v13a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 18 4.5h-2") + P("M9 3.3h6v2.6H9Z") + P("M8 9.4l2 2M10 9.4l-2 2"), a: P("M8.6 16.4c1.4-2.9 3.8-4.4 6.6-4.6M15.2 11.8l-1.7-1.3M15.2 11.8l-1.4 1.6") },
    training: { b: P("M10 4.6h4l4.3 13.9H5.7Z") + P("M3.5 18.5h17"), a: P("M8.3 11.8h7.4") },
    stats: { b: P("M4.5 20v-5.5M9.5 20v-9.5M14.5 20v-7"), a: P("M19.5 20V4.5") },
    predictions: { b: P("M3.8 16.5a8.2 8.2 0 0 1 16.4 0") + P("M5.6 11.2l1.2.7M12 7.4v1.4M18.4 11.2l-1.2.7") + C(12, 16.5, 1.4), a: P("M12.9 15.4l3.6-4.6") },
    live: { b: P("M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14"), a: DOT(12, 12, 2.2) },
    goal: { b: P("M3.5 18.5V6.5h17v12") + '<g class="net">' + P("M3.5 10.5h17M3.5 14.5h17M8 6.5v12M12 6.5v12M16 6.5v12") + "</g>", a: P("M1.8 18.5h20.4") },
    board: { b: P("M3.8 9.8v4.4a1 1 0 0 0 1 1h2.4l6.3 3.9a.6.6 0 0 0 .9-.5V5.4a.6.6 0 0 0-.9-.5L7.2 8.8H4.8a1 1 0 0 0-1 1Z") + P("M7.2 15.2l1.2 4.3"), a: P("M17.6 9.4a3.6 3.6 0 0 1 0 5.2M19.9 7.2a6.7 6.7 0 0 1 0 9.6") },
    chat: { b: P("M15.5 8.6V6.4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v5.3a2 2 0 0 0 2 2h1v2.5l2.7-2.5"), a: P("M10.6 10.6h7.9a2 2 0 0 1 2 2v4.1a2 2 0 0 1-2 2h-.7V21l-2.6-2.3h-4.6a2 2 0 0 1-2-2v-4.1a2 2 0 0 1 2-2Z") },
    fixtures: { b: P("M6 5.5h12a1.5 1.5 0 0 1 1.5 1.5v11.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5V7A1.5 1.5 0 0 1 6 5.5Z") + P("M8.5 3.5v4M15.5 3.5v4M4.5 10.5h15"), a: DOT(15.2, 15.2, 1.4) },
    fans: { b: P("M17.8 6.4a4.6 4.6 0 0 0-6.5 0l-.8.8-.8-.8a4.6 4.6 0 0 0-6.5 6.5l.8.8 6.5 6.5 6.5-6.5.8-.8a4.6 4.6 0 0 0 0-6.5Z"), a: P("M19.8 2.8l-.9 1.6M21.6 5.6l-1.7.5M17 2.2l.1 1.7") },
    notifications: { b: P("M11 4.3a5.4 5.4 0 0 0-4.4 5.3v3.6l-1.7 2.9h14.2l-1.7-2.9v-2.5M8.6 19.2a2.5 2.5 0 0 0 4.8 0"), a: DOT(17.4, 6, 2.4) },
    explore: { b: C(12, 12, 9), a: P("M15.6 8.4l-2.2 5-5 2.2 2.2-5Z") }
  };

  // src2/swirl_anim.js
  var SWIRL_ARMS = ["M519.8 489.0C520.6 488.0 522.4 485.4 524.4 483.0C526.3 480.6 528.6 477.7 531.6 474.7C534.6 471.7 538.7 467.9 542.4 465.1C546.2 462.2 550.1 459.6 554.0 457.5C557.9 455.3 562.0 453.8 566.0 452.2C570.0 450.7 574.0 449.3 578.0 448.2C582.0 447.1 586.0 446.4 590.0 445.6C594.0 444.7 598.0 443.7 602.0 443.1C606.0 442.4 610.0 441.9 614.0 441.5C618.0 441.1 622.0 440.7 626.0 440.7C630.0 440.8 634.0 441.1 638.0 441.8C642.0 442.5 646.0 443.6 650.0 445.1C654.0 446.5 658.0 448.3 662.0 450.4C666.0 452.6 670.0 455.2 674.0 458.0C678.0 460.8 682.1 464.1 685.9 467.5C689.7 470.9 693.5 474.6 697.1 478.3C700.6 482.1 703.9 486.1 706.9 490.0C710.0 493.9 712.7 498.0 715.2 502.0C717.6 506.0 719.9 510.0 721.9 514.0C723.9 518.0 725.7 522.0 727.3 526.0C728.8 530.0 730.2 534.0 731.4 538.0C732.6 542.0 733.6 546.0 734.5 550.0C735.5 554.0 736.3 558.0 737.2 562.0C738.0 566.0 738.7 570.0 739.5 574.0C740.2 578.0 741.1 582.0 741.6 586.0C742.1 590.0 742.3 594.0 742.3 598.0C742.3 602.0 742.1 606.0 741.7 610.0C741.3 614.0 740.5 618.0 739.8 622.0C739.1 626.0 738.2 630.0 737.5 634.0C736.7 638.0 736.0 642.0 735.3 646.0C734.5 650.0 733.9 654.0 733.1 658.0C732.2 662.0 731.2 666.0 730.1 670.0C729.0 674.0 727.8 678.0 726.4 682.0C725.0 686.0 723.4 690.0 721.6 694.0C719.8 698.0 717.8 702.0 715.6 706.0C713.4 710.0 711.0 714.0 708.5 718.0C706.0 722.0 703.4 726.1 700.6 730.0C697.8 733.9 694.9 737.7 691.8 741.5C688.7 745.2 685.6 749.0 682.2 752.5C678.8 756.1 675.2 759.4 671.5 762.7C667.8 766.1 663.9 769.4 660.0 772.4C656.1 775.5 652.0 778.4 648.0 781.2C644.0 783.9 640.0 786.7 636.0 789.2C632.0 791.6 628.0 793.8 624.0 796.0C620.0 798.2 616.0 800.4 612.0 802.3C608.0 804.3 604.0 806.0 600.0 807.7C596.0 809.4 592.0 811.2 588.0 812.6C584.0 814.1 580.0 815.3 576.0 816.5C572.0 817.8 568.0 819.0 564.0 820.0C560.0 821.0 556.0 821.8 552.0 822.6C548.0 823.5 544.0 824.4 540.0 825.1C536.0 825.7 532.0 826.3 528.0 826.7C524.0 827.2 520.0 827.5 516.0 827.7C512.0 827.9 508.0 827.9 504.0 827.8C500.0 827.7 496.0 827.4 492.0 827.2C488.0 826.9 484.0 826.7 480.0 826.4C476.0 826.1 472.0 825.7 468.0 825.3C464.0 824.9 460.0 824.5 456.0 824.0C452.0 823.5 448.0 822.9 444.0 822.3C440.0 821.8 436.0 821.4 432.0 820.7C428.0 820.1 424.0 819.4 420.0 818.6C416.0 817.8 412.0 817.0 408.0 816.0C404.0 815.0 400.0 813.9 396.0 812.8C392.0 811.8 388.0 810.7 384.0 809.5C380.0 808.3 376.0 807.0 372.0 805.6C368.0 804.1 364.0 802.5 360.0 800.8C356.0 799.1 352.0 797.3 348.0 795.4C344.0 793.5 340.0 791.5 336.0 789.4C332.0 787.3 328.0 785.0 324.0 782.7C320.0 780.5 316.0 778.2 312.0 775.7C308.0 773.2 304.0 770.4 300.0 767.7C296.0 764.9 292.0 762.2 288.0 759.3C284.0 756.3 280.0 753.0 276.0 749.8C272.0 746.6 268.0 743.3 264.0 739.9C260.0 736.5 255.9 732.8 252.0 729.2C248.1 725.5 244.2 721.6 240.4 717.8C236.6 713.9 232.9 710.0 229.4 706.0C225.8 702.0 222.5 698.0 219.3 694.0C216.0 690.0 212.7 686.0 209.7 682.0C206.6 678.0 203.9 674.0 201.1 670.0C198.2 666.0 195.4 662.0 192.8 658.0C190.2 654.0 187.8 650.0 185.5 646.0C183.1 642.0 180.8 638.0 178.6 634.0C176.4 630.0 174.4 626.0 172.3 622.0C170.3 618.0 168.3 614.0 166.3 610.0C164.3 606.0 162.3 602.0 160.4 598.0C158.6 594.0 156.9 590.0 155.3 586.0C153.6 582.0 151.9 578.0 150.3 574.0C148.8 570.0 147.4 566.0 146.0 562.0C144.6 558.0 143.1 553.3 142.0 550.0C140.9 546.7 140.3 544.2 139.6 542.0C138.9 539.8 138.3 537.8 138.0 537.0", "M504.0 529.0C503.3 530.0 501.8 532.5 499.9 535.0C498.0 537.5 495.7 540.6 492.7 543.8C489.8 547.0 485.8 551.2 482.0 554.3C478.2 557.4 474.0 560.1 470.0 562.3C466.0 564.6 462.0 566.3 458.0 567.8C454.0 569.3 450.0 570.4 446.0 571.5C442.0 572.6 438.0 573.6 434.0 574.5C430.0 575.5 426.0 576.5 422.0 577.3C418.0 578.0 414.0 578.7 410.0 579.2C406.0 579.6 402.0 580.0 398.0 580.1C394.0 580.2 390.0 580.1 386.0 579.6C382.0 579.0 378.0 578.0 374.0 576.7C370.0 575.5 366.0 574.1 362.0 572.1C358.0 570.2 354.0 567.7 350.0 565.1C346.0 562.4 341.9 559.4 338.0 556.2C334.1 553.0 330.1 549.4 326.4 545.7C322.8 542.0 319.3 537.9 316.1 534.0C312.9 530.1 310.0 526.0 307.5 522.0C304.9 518.0 302.8 514.0 300.7 510.0C298.7 506.0 296.8 502.0 295.2 498.0C293.5 494.0 292.1 490.0 290.7 486.0C289.4 482.0 288.1 478.0 287.1 474.0C286.0 470.0 285.2 466.0 284.4 462.0C283.6 458.0 282.8 454.0 282.1 450.0C281.4 446.0 280.6 442.0 280.1 438.0C279.6 434.0 279.4 430.0 279.3 426.0C279.2 422.0 279.3 418.0 279.6 414.0C279.9 410.0 280.6 406.0 281.2 402.0C281.7 398.0 282.4 394.0 283.1 390.0C283.7 386.0 284.5 382.0 285.3 378.0C286.1 374.0 286.9 370.0 287.8 366.0C288.7 362.0 289.6 358.0 290.6 354.0C291.7 350.0 292.8 346.0 294.1 342.0C295.5 338.0 297.0 334.0 298.7 330.0C300.5 326.0 302.5 322.0 304.6 318.0C306.8 314.0 309.1 310.0 311.6 306.0C314.1 302.0 316.8 298.0 319.7 294.0C322.6 290.0 325.6 285.9 328.8 282.0C332.1 278.1 335.7 274.2 339.2 270.5C342.6 266.8 346.1 263.1 349.7 259.7C353.3 256.2 357.0 253.0 360.7 249.9C364.5 246.8 368.2 243.9 372.1 241.2C376.0 238.4 380.0 235.9 384.0 233.4C388.0 230.9 392.0 228.4 396.0 226.1C400.0 223.8 404.0 221.7 408.0 219.7C412.0 217.7 416.0 215.8 420.0 214.1C424.0 212.4 428.0 210.9 432.0 209.5C436.0 208.0 440.0 206.6 444.0 205.4C448.0 204.1 452.0 202.9 456.0 201.9C460.0 200.8 464.0 199.9 468.0 199.1C472.0 198.2 476.0 197.4 480.0 196.7C484.0 196.1 488.0 195.6 492.0 195.2C496.0 194.7 500.0 194.4 504.0 194.2C508.0 194.0 512.0 194.0 516.0 194.0C520.0 194.0 524.0 194.1 528.0 194.2C532.0 194.4 536.0 194.6 540.0 194.8C544.0 195.1 548.0 195.4 552.0 195.8C556.0 196.2 560.0 196.7 564.0 197.2C568.0 197.6 572.0 197.9 576.0 198.4C580.0 198.9 584.0 199.7 588.0 200.3C592.0 201.0 596.0 201.5 600.0 202.3C604.0 203.1 608.0 204.0 612.0 204.9C616.0 205.9 620.0 206.8 624.0 207.9C628.0 209.0 632.0 210.2 636.0 211.5C640.0 212.7 644.0 213.9 648.0 215.4C652.0 216.8 656.0 218.4 660.0 220.0C664.0 221.6 668.0 223.3 672.0 225.2C676.0 227.0 680.0 229.2 684.0 231.3C688.0 233.4 692.0 235.5 696.0 237.8C700.0 240.1 704.0 242.5 708.0 245.1C712.0 247.6 716.0 250.1 720.0 252.8C724.0 255.6 728.0 258.4 732.0 261.4C736.0 264.3 740.0 267.4 744.0 270.6C748.0 273.9 752.0 277.3 756.0 280.7C760.0 284.2 764.1 287.6 768.0 291.3C771.9 294.9 775.8 298.7 779.5 302.5C783.2 306.3 786.8 310.1 790.3 314.0C793.8 317.9 797.2 322.0 800.4 326.0C803.7 330.0 806.8 334.0 809.9 338.0C813.0 342.0 816.1 346.0 818.9 350.0C821.8 354.0 824.4 358.0 827.1 362.0C829.7 366.0 832.5 370.0 835.1 374.0C837.6 378.0 839.9 382.0 842.2 386.0C844.5 390.0 846.9 394.0 849.1 398.0C851.2 402.0 853.1 406.0 855.1 410.0C857.0 414.0 858.8 418.0 860.5 422.0C862.2 426.0 863.8 430.0 865.4 434.0C866.9 438.0 868.5 442.0 870.0 446.0C871.5 450.0 872.9 454.0 874.3 458.0C875.7 462.0 877.3 466.7 878.4 470.0C879.5 473.3 880.3 475.8 880.9 478.0C881.6 480.2 882.2 482.2 882.4 483.0"], SWIRL_PARTS = ["M506.5 859.3C376.9 853.2 257.8 779.1 186.4 660.3C168.8 631 152.9 595.6 142.6 563C138.4 549.7 133 529.9 133 528C133 527.4 138.2 525 139.6 525C139.7 525 141 528.9 142.5 533.8C158.6 588.1 184 637 218.2 679.2C229.8 693.6 256.3 720 270.5 731.3C323.7 773.9 382.5 797.6 445.7 802.1C478.5 804.4 510.6 800.4 542.1 790C575.9 778.9 604.9 761.4 628.6 737.6C661.1 705 679.2 666.7 683.2 622.2C686.4 585.6 676.1 544.4 655.9 513.5C649 502.9 631.7 485.8 621.7 479.6C590.4 460.1 552.8 461.7 529.4 483.4C525.6 486.9 520.8 492.6 518.8 496.1C516.7 499.6 515 502.1 515 501.8C515 499.6 521.5 483.7 525.4 476.5C544.9 439.8 578.6 415.9 621.4 408.5C631.7 406.7 654.8 406.5 665.3 408.1C720.7 416.4 768.7 452.8 795 506.5C817.1 551.6 821.8 603.2 808.6 655.4C790.2 727.8 737.3 790.7 664.5 826.5C624.5 846.2 586 856.2 539.5 859C523.2 859.9 519.9 860 506.5 859.3Z", "M356 615.6C280.3 602.2 223.2 540 210.4 456.9C207.9 441.2 207.9 409.8 210.3 394C218.6 339.7 243.5 291.5 283.6 251.5C358 177.4 471.4 147.9 583 173.7C682.4 196.6 770.3 259.6 829.2 350C844.5 373.4 859.6 402.4 869.6 427.5C879.9 453.6 892.4 495.1 890.4 496.9C889.9 497.4 888.3 498 886.8 498.4C884.3 499 884 498.7 883 494.8C877.9 475.9 866.5 445.4 856.6 424.7C814 335.4 739.9 266.6 655 237.5C595.2 217.1 535.6 216 480.4 234.4C435 249.6 396.6 278 371.9 314.9C340 362.3 332 418.8 349.6 471.9C361.4 507.4 383.6 535.3 410.7 548.9C422.2 554.6 431.5 557.1 444.6 557.7C458.4 558.4 467.9 556.5 479.8 550.9C490.5 545.7 501.4 535.7 506.1 526.5C508 523 509.6 520.3 509.8 520.4C510.5 521.1 504.3 536.4 499.4 546C481.4 581.2 449.3 605.5 409 614.5C398.9 616.8 366.4 617.4 356 615.6Z"];

  // src2/liquid_engine.js
  var TURN = Math.PI * 2;
  function bezier(x1, y1, x2, y2) {
    let cx1 = 3 * x1, bx = 3 * (x2 - x1) - cx1, ax = 1 - cx1 - bx, cy1 = 3 * y1, by = 3 * (y2 - y1) - cy1, ay = 1 - cy1 - by, sx = (t) => ((ax * t + bx) * t + cx1) * t, sy = (t) => ((ay * t + by) * t + cy1) * t;
    return (x) => {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      let lo = 0, hi = 1, t = x;
      for (let i = 0; i < 22; i++) {
        let v = sx(t);
        if (Math.abs(v - x) < 1e-5) break;
        v < x ? lo = t : hi = t, t = (lo + hi) / 2;
      }
      return sy(t);
    };
  }
  var E = {
    inOut: bezier(0.65, 0, 0.35, 1),
    quint: bezier(0.83, 0, 0.17, 1),
    out: bezier(0.16, 1, 0.3, 1),
    windUp: bezier(0.5, 0, 0.75, 0),
    fall: bezier(0.55, 0, 0.85, 0.35),
    spread: bezier(0.5, 0.15, 0.2, 1)
  }, clamp = (v) => v < 0 ? 0 : v > 1 ? 1 : v, span = (t, a, b) => clamp((t - a) / (b - a)), lerp = (a, b, f) => a + (b - a) * f;
  function rng(seed) {
    let s = seed;
    return () => (s = s * 16807 % 2147483647, (s - 1) / 2147483646);
  }
  var SDF_N = 512, SDF_RANGE = 512, SDF = null;
  function edt1d(f, n, d, v, z, arg) {
    let k = 0;
    v[0] = 0, z[0] = -1e20, z[1] = 1e20;
    for (let q = 1; q < n; q++) {
      let s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
      for (; s <= z[k]; )
        k--, s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
      k++, v[k] = q, z[k] = s, z[k + 1] = 1e20;
    }
    k = 0;
    for (let q = 0; q < n; q++) {
      for (; z[k + 1] < q; ) k++;
      d[q] = (q - v[k]) * (q - v[k]) + f[v[k]], arg && (arg[q] = v[k]);
    }
  }
  function edt(grid, N) {
    let f = new Float64Array(N), d = new Float64Array(N), v = new Int32Array(N), z = new Float64Array(N + 1);
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) f[y] = grid[y * N + x];
      edt1d(f, N, d, v, z);
      for (let y = 0; y < N; y++) grid[y * N + x] = d[y];
    }
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) f[x] = grid[y * N + x];
      edt1d(f, N, d, v, z);
      for (let x = 0; x < N; x++) grid[y * N + x] = d[x];
    }
    return grid;
  }
  var ARM_LEN = 900;
  function nearestSeed(mask, N) {
    let out = new Int32Array(N * N), d1 = new Float64Array(N * N), r1 = new Int32Array(N * N), f = new Float64Array(N), d = new Float64Array(N), v = new Int32Array(N), z = new Float64Array(N + 1), arg = new Int32Array(N);
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) f[y] = mask[y * N + x] >= 0 ? 0 : 1e20;
      edt1d(f, N, d, v, z, arg);
      for (let y = 0; y < N; y++)
        d1[y * N + x] = d[y], r1[y * N + x] = arg[y];
    }
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) f[x] = d1[y * N + x];
      edt1d(f, N, d, v, z, arg);
      for (let x = 0; x < N; x++) out[y * N + x] = r1[y * N + arg[x]] * N + arg[x];
    }
    return out;
  }
  function armField(N) {
    let scale = N / 1024, out = new Uint16Array(N * N), lat = new Uint8Array(N * N);
    try {
      let masks = SWIRL_PARTS.map((part) => {
        let c = document.createElement("canvas");
        c.width = c.height = N;
        let x = c.getContext("2d");
        return x.scale(scale, scale), x.fill(new Path2D(part)), x.getImageData(0, 0, N, N).data;
      }), total = 0, arms = SWIRL_ARMS.map((d) => {
        let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        let L = path.getTotalLength();
        if (!(L > 0)) throw new Error("no length");
        total += L;
        let steps = Math.ceil(L * scale * 3), px = new Float32Array(steps + 1), py = new Float32Array(steps + 1);
        for (let i = 0; i <= steps; i++) {
          let pt = path.getPointAtLength(L * i / steps);
          px[i] = pt.x * scale - 0.5, py[i] = pt.y * scale - 0.5;
        }
        let seed = new Int32Array(N * N).fill(-1), votes = masks.map(() => 0);
        for (let i = 0; i <= steps; i++) {
          let x = Math.round(px[i]), y = Math.round(py[i]);
          x < 0 || y < 0 || x >= N || y >= N || (seed[y * N + x] = i, masks.forEach((m, mi) => {
            m[(y * N + x) * 4 + 3] >= 128 && votes[mi]++;
          }));
        }
        return { L: L * scale, steps, px, py, seed, near: nearestSeed(seed, N), owner: votes.indexOf(Math.max.apply(null, votes)) };
      });
      ARM_LEN = total / SWIRL_ARMS.length;
      let measure = (arm, x, y) => {
        let k = arm.near[y * N + x], i = arm.seed[k], a = Math.max(0, i - 1), b = Math.min(arm.steps, i + 1), tx = arm.px[b] - arm.px[a], ty = arm.py[b] - arm.py[a], tl = Math.hypot(tx, ty) || 1;
        tx /= tl, ty /= tl;
        let dx = x - arm.px[i], dy = y - arm.py[i];
        return [i / arm.steps + (dx * tx + dy * ty) / arm.L, Math.abs(dx * ty - dy * tx)];
      };
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        let i = y * N + x, m = null;
        if (arms.forEach((arm) => {
          masks[arm.owner][i * 4 + 3] >= 128 && (m = measure(arm, x, y));
        }), !m) {
          let ma = arms.map((arm) => measure(arm, x, y)), da = arms.map((arm, ai) => {
            let k = arm.near[i];
            return Math.hypot(x - k % N, y - Math.floor(k / N));
          });
          m = ma[da[0] <= da[1] ? 0 : 1];
        }
        out[i] = Math.round(Math.max(0, Math.min(1, m[0])) * 65535), lat[i] = Math.min(255, Math.round(m[1] * 4));
      }
    } catch (e) {
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) out[y * N + x] = Math.min(65535, Math.round(Math.hypot((x + 0.5) / scale - 512, (y + 0.5) / scale - 512) / 380 * 65535));
      lat.fill(0);
    }
    return { s: out, lat };
  }
  var LAT = null;
  function swirlSdf() {
    if (SDF) return SDF;
    let N = SDF_N, c = document.createElement("canvas");
    c.width = c.height = N;
    let x = c.getContext("2d");
    x.scale(N / 1024, N / 1024), x.fill(new Path2D(SWIRL));
    let px = x.getImageData(0, 0, N, N).data, out = new Float64Array(N * N), inn = new Float64Array(N * N);
    for (let i = 0; i < N * N; i++) {
      let on = px[i * 4 + 3] >= 128;
      out[i] = on ? 0 : 1e20, inn[i] = on ? 1e20 : 0;
    }
    edt(out, N), edt(inn, N);
    let along = armField(N), bytes = new Uint8Array(N * N * 3), along16 = new Uint8Array(N * N * 3);
    for (let i = 0; i < N * N; i++) {
      let s = out[i] > 0 ? Math.sqrt(out[i]) - 0.5 : 0.5 - Math.sqrt(inn[i]), v = Math.max(0, Math.min(65535, Math.round((0.5 + s / (2 * SDF_RANGE)) * 65535)));
      bytes[i * 3] = v >> 8, bytes[i * 3 + 1] = v & 255, bytes[i * 3 + 2] = along.lat[i], along16[i * 3] = along.s[i] >> 8, along16[i * 3 + 1] = along.s[i] & 255;
    }
    return SDF = bytes, LAT = along16, SDF;
  }
  var NSTAR = 36, NDROP = 8, VERT = "attribute vec2 aP; void main() { gl_Position = vec4(aP, 0.0, 1.0); }", LIQUID_SHADER = `
precision highp float;
uniform vec2 uRes, uCenter; uniform vec3 uCover; uniform vec4 uInk; uniform float uDpr, uBg;
uniform sampler2D uSdf, uLat;
uniform float uK, uSpin, uBlur, uTwist, uMorph, uRc, uRot, uAmp, uInner, uDk, uLight, uFade, uGrow, uArmLen, uGk;
uniform vec4 uDrop[${NDROP}];
uniform vec4 uStar[${NSTAR}];
uniform vec2 uStarB[${NSTAR}];
const float RANGE = ${(SDF_RANGE * 2).toFixed(1)};
const vec3 TA = vec3(0.435, 0.941, 0.886);
const vec3 TB = vec3(0.0745, 0.761, 0.702);
const vec3 TC = vec3(0.0314, 0.498, 0.549);

float smin(float a, float b, float k) { float h = max(k - abs(a - b), 0.0) / k; return min(a, b) - h * h * k * 0.25; }
vec2 rot(vec2 v, float a) { float c = cos(a), s = sin(a); return vec2(c * v.x - s * v.y, s * v.x + c * v.y); }
vec3 teal(float x) { x = clamp(x * 0.5 + 0.5, 0.0, 1.0); return x < 0.5 ? mix(TA, TB, x * 2.0) : mix(TB, TC, x * 2.0 - 1.0); }
float lobes(float ang, float r) { return 0.9 * cos(2.0 * (ang + r)) + 0.1 * cos(3.0 * (ang + r * 0.8) + 1.0); }
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

/* Each texel: the distance to the edge in two bytes (r, g), where along its arm it lies (b), and how far it is
   from that arm's centre line (a) */
vec3 dec(vec2 i) { vec2 uv = (i + 0.5) / ${SDF_N}.0; vec4 v = texture2D(uSdf, uv), a = texture2D(uLat, uv); return vec3((v.r * 65280.0 + v.g * 255.0) / 65535.0, (a.r * 65280.0 + a.g * 255.0) / 65535.0, v.b); }
vec3 field(vec2 uv) {
  vec2 st = clamp(uv, 0.0, 1.0) * ${SDF_N}.0 - 0.5;
  vec2 i = floor(st), f = st - i;
  vec3 v = mix(mix(dec(i), dec(i + vec2(1.0, 0.0)), f.x), mix(dec(i + vec2(0.0, 1.0)), dec(i + vec2(1.0, 1.0)), f.x), f.y);
  return vec3((v.x - 0.5) * RANGE * ${(1024 / SDF_N).toFixed(1)}, v.y, v.z * 127.5);
}
vec3 swirlF(vec2 p, float spin) {
  vec2 q = p / uK;
  float rn = length(q) / 380.0;
  q = rot(q, spin + uTwist * (1.0 - smoothstep(0.0, 1.0, rn)));
  vec2 uv = (q + 512.0) / 1024.0;
  vec2 off = (uv - clamp(uv, 0.0, 1.0)) * 1024.0;
  vec3 fl = field(uv);
  return vec3((fl.x + length(off)) * uK, fl.y, fl.z * uK);
}
float swirlD(vec2 p, float spin) { return swirlF(p, spin).x; }
float smax(float a, float b, float k) { return -smin(-a, -b, k); }
float cover(float d) {
#ifdef DERIV
  /* Edge width from the field's own slope, capped so a jump in the field never reads as an edge */
  float w = clamp(length(vec2(dFdx(d), dFdy(d))), 1e-4, 6.0 / uDpr);
  return clamp(0.5 - d / w, 0.0, 1.0);
#else
  return clamp(0.5 - d * uDpr, 0.0, 1.0);
#endif
}
float shapeD(vec2 p, float spin, float ang) {
  float dc = length(p) - uRc * (1.0 + uAmp * lobes(ang, uRot));
  float d;
  if (uGrow < 0.999) {
    /* The arms are thrown out of the drop root first, or drawn back into it tip first; the drop feeds them */
    /* Past the front, a round cap as thick as the arm there: the rounded tip of a jet of liquid */
    vec3 sw = swirlF(p, spin);
    float u = (sw.y - uGrow) * uArmLen * uK;
    float arms = u > 0.0 ? length(vec2(u, sw.z)) - (sw.z - sw.x) : sw.x;
    d = uRc > 0.0 ? smin(arms, dc, uGk) : arms;
  } else {
    d = uMorph < 0.999 ? mix(swirlD(p, spin), dc, uMorph) : dc;
  }
  for (int i = 0; i < ${NDROP}; i++) {
    if (uDrop[i].z > 0.0) d = smin(d, length(p - uDrop[i].xy) - uDrop[i].z, uDk);
  }
  return d;
}
float stars(vec2 p) {
  float acc = 0.0;
  for (int i = 0; i < ${NSTAR}; i++) {
    float al = uStarB[i].y;
    if (al <= 0.0) continue;
    vec2 a = uStar[i].xy, b = uStar[i].zw;
    float r = uStarB[i].x;
    vec2 pa = p - a, ba = b - a;
    float L = length(ba);
    if (dot(pa, pa) > (L + r + 2.0) * (L + r + 2.0)) continue;
    float hh = L > 0.01 ? clamp(dot(pa, ba) / (L * L), 0.0, 1.0) : 0.0;
    float dd = length(pa - ba * hh) - r;
    acc += clamp(0.5 - dd * uDpr, 0.0, 1.0) * al * (2.0 * r / (2.0 * r + L));
  }
  return min(acc, 1.0);
}
void main() {
  vec2 frag = vec2(gl_FragCoord.x, uRes.y * uDpr - gl_FragCoord.y) / uDpr;
  vec2 p = frag - uCenter;
  float ang = atan(p.y, p.x);
  float d0 = shapeD(p, uSpin, ang);
  float cov = cover(d0);
  if (uBlur > 0.002 && uMorph < 0.999) {
    for (int i = 1; i < 4; i++) cov += cover(shapeD(p, uSpin - uBlur * float(i) / 3.0, ang));
    cov *= 0.25;
  }
  float hole = 0.0, dIn = 0.0;
  if (uInner > 0.0) {
    dIn = length(p) - uInner * (1.0 + uAmp * 0.92 * lobes(ang, uRot - 0.35));
    hole = cover(dIn);
  }
  /* The light stays still while the liquid turns: always from the top left, like the logo */
  vec3 liq = teal(dot(p, vec2(0.7071)) / mix(uK * 380.0, 0.5 * length(uRes), uMorph));
  if (uInner > 0.0) {
    float w = clamp(dIn / max(dIn - d0, 1.0), 0.0, 1.0);
    liq = mix(liq, mix(mix(TB, TA, 0.28), TC, w), 0.5);
  }
  liq = mix(liq, uInk.rgb, uInk.a);
  vec3 bg = uCover + TB * uLight * (1.0 - smoothstep(0.0, 0.62 * max(uRes.x, uRes.y), length(p)));
  bg += vec3(stars(p));
  float liqCov = cov * (1.0 - hole);
  float bgCov = (1.0 - cov) * (1.0 - hole) * uBg;
  vec3 col = bg * bgCov + liq * liqCov + (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  gl_FragColor = vec4(col, bgCov + liqCov) * uFade;
}`;
  function createRenderer(canvas) {
    try {
      let gl = canvas.getContext("webgl", { premultipliedAlpha: !0, alpha: !0, antialias: !1 });
      if (!gl) return !1;
      let sh = (type, src) => {
        let s = gl.createShader(type);
        if (gl.shaderSource(s, src), gl.compileShader(s), !gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
        return s;
      }, prog = gl.createProgram();
      gl.attachShader(prog, sh(gl.VERTEX_SHADER, VERT));
      let deriv = gl.getExtension("OES_standard_derivatives") ? `#extension GL_OES_standard_derivatives : enable
#define DERIV 1
` : "";
      if (gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, deriv + LIQUID_SHADER)), gl.linkProgram(prog), !gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
      gl.useProgram(prog);
      let buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      let aP = gl.getAttribLocation(prog, "aP");
      gl.enableVertexAttribArray(aP), gl.vertexAttribPointer(aP, 2, gl.FLOAT, !1, 0, 0);
      let tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex), gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, SDF_N, SDF_N, 0, gl.RGB, gl.UNSIGNED_BYTE, swirlSdf()), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      let names = ["uRes", "uCenter", "uCover", "uInk", "uBg", "uDpr", "uSdf", "uLat", "uK", "uSpin", "uBlur", "uTwist", "uMorph", "uRc", "uRot", "uAmp", "uInner", "uDk", "uLight", "uFade", "uGrow", "uArmLen", "uGk", "uDrop", "uStar", "uStarB"], loc = {};
      names.forEach((n) => {
        loc[n] = gl.getUniformLocation(prog, n);
      }), gl.uniform1i(loc.uSdf, 0);
      let lat = gl.createTexture();
      return gl.activeTexture(gl.TEXTURE1), gl.bindTexture(gl.TEXTURE_2D, lat), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, SDF_N, SDF_N, 0, gl.RGB, gl.UNSIGNED_BYTE, LAT), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE), gl.uniform1i(loc.uLat, 1), gl.activeTexture(gl.TEXTURE0), {
        canvas,
        dispose() {
          let lose = gl.getExtension("WEBGL_lose_context");
          lose && lose.loseContext();
        },
        draw(u, W, H, dpr) {
          let w = Math.round(W * dpr), hh = Math.round(H * dpr);
          return (canvas.width !== w || canvas.height !== hh) && (canvas.width = w, canvas.height = hh), gl.viewport(0, 0, w, hh), gl.uniform2f(loc.uRes, W, H), gl.uniform2f(loc.uCenter, u.uCenter[0], u.uCenter[1]), gl.uniform1f(loc.uBg, u.uBg), gl.uniform3f(loc.uCover, u.uCover[0], u.uCover[1], u.uCover[2]), gl.uniform4f(loc.uInk, u.uInk[0], u.uInk[1], u.uInk[2], u.uInk[3]), gl.uniform1f(loc.uDpr, dpr), ["uK", "uSpin", "uBlur", "uTwist", "uMorph", "uRc", "uRot", "uAmp", "uInner", "uDk", "uLight", "uFade", "uGrow", "uGk"].forEach((n) => gl.uniform1f(loc[n], u[n])), gl.uniform1f(loc.uArmLen, ARM_LEN), gl.uniform4fv(loc.uDrop, u.uDrop), gl.uniform4fv(loc.uStar, u.uStar), gl.uniform2fv(loc.uStarB, u.uStarB), gl.clearColor(0, 0, 0, 0), gl.clear(gl.COLOR_BUFFER_BIT), gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4), canvas;
        }
      };
    } catch (e) {
      return !1;
    }
  }
  var SHARED = null;
  function sharedRenderer() {
    return SHARED === null && (SHARED = createRenderer(document.createElement("canvas"))), SHARED;
  }
  function blank(W, H) {
    return {
      uCenter: [W / 2, H / 2],
      uCover: [0.0235, 0.0431, 0.1176],
      uInk: [1, 1, 1, 0],
      uBg: 0,
      uK: 1,
      uSpin: 0,
      uBlur: 0,
      uTwist: 0,
      uMorph: 1,
      uRc: -10,
      uRot: 0,
      uAmp: 0,
      uInner: 0,
      uDk: 8,
      uLight: 0,
      uFade: 1,
      uGrow: 1,
      uGk: 8,
      uDrop: new Float32Array(NDROP * 4),
      uStar: new Float32Array(NSTAR * 4),
      uStarB: new Float32Array(NSTAR * 2)
    };
  }
  function makePainter(cv, W, H, frozen, gpu) {
    let dpr = Math.min(2, window.devicePixelRatio || 1), g, ctx = null;
    return frozen ? (cv.width = Math.round(W * dpr), cv.height = Math.round(H * dpr), ctx = cv.getContext("2d"), g = sharedRenderer()) : (gpu.current === void 0 && (gpu.current = createRenderer(cv)), g = gpu.current, g || (cv.width = Math.round(W * dpr), cv.height = Math.round(H * dpr), ctx = cv.getContext("2d"))), {
      gpu: !!g,
      paint(u, fallback) {
        g ? ctx ? (ctx.clearRect(0, 0, cv.width, cv.height), ctx.drawImage(g.draw(u, W, H, dpr), 0, 0)) : g.draw(u, W, H, dpr) : (ctx.clearRect(0, 0, cv.width, cv.height), fallback && (ctx.fillStyle = fallback, ctx.fillRect(0, 0, cv.width, cv.height)));
      }
    };
  }
  function stillMotion() {
    return typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  // src2/logo_liquid.js
  var LOGO_FORM = { converge: 560, grow: 120, eject: 470, done: 1250 }, F = LOGO_FORM, THROW = bezier(0.22, 0.62, 0.32, 1), DROPS = [
    { a: 0.3, r: 0.95, s: 0.085, lag: 0 },
    { a: 1.35, r: 0.8, s: 0.065, lag: 40 },
    { a: 2.4, r: 0.92, s: 0.095, lag: 20 },
    { a: 3.4, r: 0.85, s: 0.07, lag: 60 },
    { a: 4.45, r: 0.95, s: 0.09, lag: 10 },
    { a: 5.4, r: 0.78, s: 0.06, lag: 50 }
  ];
  function throwState(t, t0, t1, rc0) {
    let g = THROW(span(t, t0, t1));
    return { grow: g, rc: rc0 * Math.sqrt(Math.max(0, 1 - g)) };
  }
  function logoFormFrame(t, size, S, ink) {
    let u = blank(S, S), gather = 0.3 * size * E.out(span(t, F.grow, F.eject + 60)), th = throwState(t, F.eject, F.done, 1);
    u.uMorph = 0, u.uGrow = th.grow, u.uRc = gather * th.rc, u.uGk = 0.16 * size;
    let spin = -1.35 * (1 - E.out(span(t, F.eject - 260, F.done)));
    return u.uSpin = spin, u.uRot = spin, u.uTwist = 0, u.uK = size / 758, u.uDk = 0.24 * size, DROPS.forEach((d, i) => {
      let w = E.inOut(span(t, d.lag, F.converge + d.lag * 0.5));
      if (w >= 1) return;
      let rr = d.r * size * (1 - w), a = d.a - 1.1 * w, rad = d.s * size * (0.25 + 0.75 * E.out(span(t, d.lag, d.lag + 180)));
      u.uDrop.set([Math.cos(a) * rr, Math.sin(a) * rr, rad, 1], i * 4);
    }), ink && (u.uInk = [ink[0], ink[1], ink[2], 1]), u;
  }
  function playLogoForm(canvas, o) {
    let g = createRenderer(canvas);
    if (!g)
      return o.onDone(), () => {
      };
    let dpr = Math.min(2, window.devicePixelRatio || 1), raf, t0 = null, live = !0, stop = () => {
      live && (live = !1, cancelAnimationFrame(raf), g.dispose());
    }, tick = (now) => {
      t0 == null && (t0 = now);
      let t = now - t0;
      g.draw(logoFormFrame(Math.min(t, F.done), o.size, o.S, o.ink), o.S, o.S, dpr), t < F.done ? raf = requestAnimationFrame(tick) : (stop(), o.onDone());
    };
    return g.draw(logoFormFrame(0, o.size, o.S, o.ink), o.S, o.S, dpr), raf = requestAnimationFrame(tick), stop;
  }

  // src2/glyphs_ion.js
  var GLYPH_SRC = { heart: { o: '<path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>', f: '<path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" fill="currentColor"/>' }, chat: { o: '<path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 014.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 00-11.12-2.07 30.71 30.71 0 00-12.09 2.43l-67.83 24.48a16 16 0 01-4.67 1.22 9.6 9.6 0 01-9.57-9.74 15.85 15.85 0 01.6-3.29z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/>', f: '<path d="M76.83 480a25.69 25.69 0 01-25.57-25.74 29.13 29.13 0 011.2-7.63L70.88 380c.77-2.46-.1-4.94-1.23-6.9l-.22-.4c-.08-.13-.46-.66-.73-1.05s-.58-.81-.86-1.22l-.19-.27A215.66 215.66 0 0132 251.37c-.18-57.59 22.35-112 63.46-153.28C138 55.47 194.9 32 255.82 32A227.4 227.4 0 01398 81.84c39.45 31.75 66.87 76 77.21 124.68a213.5 213.5 0 014.78 45c0 58.93-22.64 114.28-63.76 155.87-41.48 42-97.18 65.06-156.83 65.06-21 0-47.87-5.36-60.77-9-15.52-4.34-30.23-10-31.85-10.6a15.12 15.12 0 00-5.37-1 14.75 14.75 0 00-5.8 1.15l-.85.33-67.48 24.38A29.44 29.44 0 0176.83 480zm-2-31.8zM87.48 380z" fill="currentColor"/>' }, back: { o: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/>' }, send: { o: '<path d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>', f: '<path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z" fill="currentColor"/>' }, clock: { o: '<path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/>', f: '<path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 01-16-16V128a16 16 0 0132 0v128h80a16 16 0 010 32z" fill="currentColor"/>' }, search: { o: '<path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448"/>' }, gear: { o: '<path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>', f: '<circle cx="256" cy="256" r="48" fill="currentColor"/><path d="M470.39 300l-.47-.38-31.56-24.75a16.11 16.11 0 01-6.1-13.33v-11.56a16 16 0 016.11-13.22L469.92 212l.47-.38a26.68 26.68 0 005.9-34.06l-42.71-73.9a1.59 1.59 0 01-.13-.22A26.86 26.86 0 00401 92.14l-.35.13-37.1 14.93a15.94 15.94 0 01-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 01-8.19-11.82l-5.59-39.59-.12-.72A27.22 27.22 0 00298.76 26h-85.52a26.92 26.92 0 00-26.45 22.39l-.09.56-5.57 39.67a16 16 0 01-8.13 11.82 175.21 175.21 0 00-10 5.82 15.92 15.92 0 01-14.43 1.27l-37.13-15-.35-.14a26.87 26.87 0 00-32.48 11.34l-.13.22-42.77 73.95a26.71 26.71 0 005.9 34.1l.47.38 31.56 24.75a16.11 16.11 0 016.1 13.33v11.56a16 16 0 01-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 00-5.9 34.06l42.71 73.9a1.59 1.59 0 01.13.22 26.86 26.86 0 0032.45 11.3l.35-.13 37.07-14.93a15.94 15.94 0 0114.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 018.19 11.82l5.56 39.59.12.72A27.22 27.22 0 00213.24 486h85.52a26.92 26.92 0 0026.45-22.39l.09-.56 5.57-39.67a16 16 0 018.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0114.43-1.27l37.13 14.95.35.14a26.85 26.85 0 0032.48-11.34 2.53 2.53 0 01.13-.22l42.71-73.89a26.7 26.7 0 00-5.89-34.11zm-134.48-40.24a80 80 0 11-83.66-83.67 80.21 80.21 0 0183.66 83.67z" fill="currentColor"/>' }, eye: { o: '<path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>', f: '<circle cx="256" cy="256" r="64" fill="currentColor"/><path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z" fill="currentColor"/>' }, share: { o: '<path d="M336 192h40a40 40 0 0140 40v192a40 40 0 01-40 40H136a40 40 0 01-40-40V232a40 40 0 0140-40h40M336 128l-80-80-80 80M256 321V48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>', f: '<path d="M376 176H272v145a16 16 0 01-32 0V176H136a56.06 56.06 0 00-56 56v192a56.06 56.06 0 0056 56h240a56.06 56.06 0 0056-56V232a56.06 56.06 0 00-56-56zM272 86.63l52.69 52.68a16 16 0 0022.62-22.62l-80-80a16 16 0 00-22.62 0l-80 80a16 16 0 0022.62 22.62L240 86.63V176h32z" fill="currentColor"/>' }, plus: { o: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 112v288M400 256H112"/>' }, close: { o: '<path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" fill="currentColor"/>' }, more: { o: '<circle cx="256" cy="256" r="48" fill="currentColor"/><circle cx="416" cy="256" r="48" fill="currentColor"/><circle cx="96" cy="256" r="48" fill="currentColor"/>' }, edit: { o: '<path d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" fill="currentColor"/>', f: '<path d="M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z" fill="currentColor"/><path d="M386.34 193.66L264.45 315.79A41.08 41.08 0 01247.58 326l-25.9 8.67a35.92 35.92 0 01-44.33-44.33l8.67-25.9a41.08 41.08 0 0110.19-16.87l122.13-121.91a8 8 0 00-5.65-13.66H104a56 56 0 00-56 56v240a56 56 0 0056 56h240a56 56 0 0056-56V199.31a8 8 0 00-13.66-5.65z" fill="currentColor"/>' }, trash: { o: '<path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" fill="currentColor"/><path d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>', f: '<path d="M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z" fill="none"/><path d="M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z" fill="currentColor"/>' }, chevron: { o: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144"/>' }, "chevron-down": { o: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/>' }, shield: { o: '<path d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>', f: '<path d="M479.07 111.35a16 16 0 00-13.15-14.75C379.89 81.18 343.69 69.12 266 34.16c-7.76-2.89-12.57-2.84-20 0-77.69 35-113.89 47-199.92 62.44a16 16 0 00-13.15 14.75c-3.85 61.1 4.34 118 24.36 169.15a348.86 348.86 0 0071.43 112.41c44.67 47.43 94.2 75.12 119.74 85.6a20 20 0 0015.11 0c27-10.92 74.69-37.82 119.71-85.62a348.86 348.86 0 0071.43-112.39c20.02-51.14 28.21-108.05 24.36-169.15z" fill="currentColor"/>' }, trophy: { o: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 464h160M256 464V336M384 224c0-50.64-.08-134.63-.12-160a16 16 0 00-16-16l-223.79.26a16 16 0 00-16 15.95c0 30.58-.13 129.17-.13 159.79 0 64.28 83 112 128 112S384 288.28 384 224z"/><path d="M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>', f: '<path d="M464 80h-60.1a4 4 0 01-4-4V63.92a32 32 0 00-32-31.92l-223.79.26a32 32 0 00-31.94 31.93V76a4 4 0 01-4 4H48a16 16 0 00-16 16v16c0 54.53 30 112.45 76.52 125.35a7.82 7.82 0 015.55 5.9c5.77 26.89 23.52 52.5 51.41 73.61 20.91 15.83 45.85 27.5 68.27 32.48a8 8 0 016.25 7.8V444a4 4 0 01-4 4h-59.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 00176 480h159.55c8.61 0 16-6.62 16.43-15.23A16 16 0 00336 448h-60a4 4 0 01-4-4v-86.86a8 8 0 016.25-7.8c22.42-5 47.36-16.65 68.27-32.48 27.89-21.11 45.64-46.72 51.41-73.61a7.82 7.82 0 015.55-5.9C450 224.45 480 166.53 480 112V96a16 16 0 00-16-16zM112 198.22a4 4 0 01-6 3.45c-10.26-6.11-17.75-15.37-22.14-21.89-11.91-17.69-19-40.67-19.79-63.63a4 4 0 014-4.15h40a4 4 0 014 4c-.02 27.45-.07 58.87-.07 82.22zm316.13-18.44c-4.39 6.52-11.87 15.78-22.13 21.89a4 4 0 01-6-3.46c0-26.51 0-56.63-.05-82.21a4 4 0 014-4h40a4 4 0 014 4.15c-.79 22.96-7.9 45.94-19.81 63.63z" fill="currentColor"/>' }, person: { o: '<path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>', f: '<path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 01-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 01432 480z" fill="currentColor"/>' }, globe: { o: '<path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48v416M464 256H48"/>', f: '<path d="M340.75 344.49c5.91-20.7 9.82-44.75 11.31-67.84a4.41 4.41 0 00-4.46-4.65h-71.06a4.43 4.43 0 00-4.47 4.39v55.3a4.44 4.44 0 004.14 4.38 273.51 273.51 0 0159 11.39 4.45 4.45 0 005.54-2.97zM323.58 377.31a260.05 260.05 0 00-46.6-9.09 4.42 4.42 0 00-4.91 4.29v65.24a4.47 4.47 0 006.76 3.7c15.9-9.27 29-24.84 40.84-45.43 1.94-3.36 4.89-9.15 6.67-12.69a4.29 4.29 0 00-2.76-6.02zM235.29 368.4a256.85 256.85 0 00-46.56 8.82c-2.64.76-3.75 4.4-2.55 6.79 1.79 3.56 4 8.11 5.89 11.51 13 23 26.84 37.5 41.24 45.93a4.47 4.47 0 006.76-3.7v-65.27a4.16 4.16 0 00-4.78-4.08zM235.6 272h-71.06a4.41 4.41 0 00-4.46 4.64c1.48 23.06 5.37 47.16 11.26 67.84a4.46 4.46 0 005.59 3 272.2 272.2 0 0159-11.36 4.44 4.44 0 004.15-4.38V276.4a4.43 4.43 0 00-4.48-4.4zM277 143.78a235.8 235.8 0 0046.5-9.14 4.3 4.3 0 002.76-6c-1.79-3.57-4.27-8.68-6.17-12.09-12.29-22-26.14-37.35-41.24-46a4.48 4.48 0 00-6.76 3.7v65.23a4.43 4.43 0 004.91 4.3zM276.54 240h71.06a4.39 4.39 0 004.46-4.58c-1.48-22.77-5.27-47.8-11.16-68.22a4.46 4.46 0 00-5.59-2.95c-19 5.74-38.79 10.43-59.09 12a4.4 4.4 0 00-4.15 4.32v55.11a4.4 4.4 0 004.47 4.32zM233.31 70.56c-15.42 8.57-29.17 24.43-41.47 46.37-1.91 3.41-4.19 8.11-6 11.67a4.31 4.31 0 002.76 6 225.42 225.42 0 0046.54 9.17 4.43 4.43 0 004.91-4.29V74.26a4.49 4.49 0 00-6.74-3.7zM235.92 176.26c-20.3-1.55-40.11-6.24-59.09-12a4.46 4.46 0 00-5.59 2.95c-5.89 20.42-9.68 45.45-11.16 68.22a4.39 4.39 0 004.46 4.58h71.06a4.4 4.4 0 004.47-4.34v-55.09a4.4 4.4 0 00-4.15-4.32z" fill="currentColor"/><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM176.6 430.85a219.08 219.08 0 01-12.48-19.66c-2-3.69-4.84-9.26-6.73-13.13a7.29 7.29 0 00-10.31-3.16c-4.3 2.41-10 5.72-14.13 8.43a147.29 147.29 0 01-23.57-22.43 248.83 248.83 0 0130.41-18.36c1.86-1 2.77-2.14 2.18-4.18a374.8 374.8 0 01-14.09-82.17 4.36 4.36 0 00-4.3-4.17H66.84a2 2 0 01-2-1.7A98.28 98.28 0 0164 256a96.27 96.27 0 01.86-14.29 2 2 0 012-1.7h56.74c2.29 0 4.17-1.32 4.29-3.63a372.71 372.71 0 0114-81.83 4.36 4.36 0 00-2.19-5.11 260.63 260.63 0 01-29.84-17.9 169.82 169.82 0 0123.14-22.8c4.08 2.68 9.4 5.71 13.66 8.11a7.89 7.89 0 0011-3.42c1.88-3.87 4-8.18 6.06-11.88a221.93 221.93 0 0112.54-19.91A185 185 0 01256 64c28.94 0 55.9 7 80.53 18.46a202.23 202.23 0 0112 19c2.59 4.66 5.34 10.37 7.66 15.32a4.29 4.29 0 005.92 1.94c5.38-2.91 11.21-6.26 16.34-9.63a171.36 171.36 0 0123.2 23 244.89 244.89 0 01-29.06 17.31 4.35 4.35 0 00-2.18 5.12 348.68 348.68 0 0113.85 81.4 4.33 4.33 0 004.3 4.12l56.62-.07a2 2 0 012 1.7 117.46 117.46 0 010 28.62 2 2 0 01-2 1.72h-56.67a4.35 4.35 0 00-4.3 4.17 367.4 367.4 0 01-13.87 81.3 4.45 4.45 0 002.19 5.19c5 2.59 10.57 5.48 15.37 8.42s9.55 6.08 14.13 9.34a172.73 172.73 0 01-23 22.93c-2.44-1.61-5.34-3.44-7.84-4.94-1.72-1-4.89-2.77-6.65-3.76-3.82-2.14-7.88-.54-9.79 3.4s-4.83 9.59-6.87 13.25a212.42 212.42 0 01-12.35 19.53C310.91 442.37 284.94 448 256 448s-54.77-5.63-79.4-17.15z" fill="currentColor"/>' }, bell: { o: '<path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>', f: '<path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" fill="currentColor"/>' }, "caret-up": { o: '<path d="M414 321.94L274.22 158.82a24 24 0 00-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62z" fill="currentColor"/>' }, "caret-down": { o: '<path d="M98 190.06l139.78 163.12a24 24 0 0036.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z" fill="currentColor"/>' }, info: { o: '<path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M220 220h32v116"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M208 340h88"/><path d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z" fill="currentColor"/>', f: '<path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z" fill="currentColor"/>' }, people: { o: '<path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/>', f: '<path d="M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zM467.83 432H204.18a27.71 27.71 0 01-22-10.67 30.22 30.22 0 01-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 01-5.32 25.78A27.68 27.68 0 01467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zM212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 004.79 23.36A25.32 25.32 0 0041.72 400h111a8 8 0 007.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 00-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z" fill="currentColor"/>' }, calendar: { o: '<rect fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48"/><circle cx="296" cy="232" r="24" fill="currentColor"/><circle cx="376" cy="232" r="24" fill="currentColor"/><circle cx="296" cy="312" r="24" fill="currentColor"/><circle cx="376" cy="312" r="24" fill="currentColor"/><circle cx="136" cy="312" r="24" fill="currentColor"/><circle cx="216" cy="312" r="24" fill="currentColor"/><circle cx="136" cy="392" r="24" fill="currentColor"/><circle cx="216" cy="392" r="24" fill="currentColor"/><circle cx="296" cy="392" r="24" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M128 48v32M384 48v32"/><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M464 160H48"/>', f: '<path d="M480 128a64 64 0 00-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 00112 48v16H96a64 64 0 00-64 64v12a4 4 0 004 4h440a4 4 0 004-4zM32 416a64 64 0 0064 64h320a64 64 0 0064-64V179a3 3 0 00-3-3H35a3 3 0 00-3 3zm344-208a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24zm-80-80a24 24 0 11-24 24 24 24 0 0124-24zm0 80a24 24 0 11-24 24 24 24 0 0124-24z" fill="currentColor"/>' }, alert: { o: '<path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path d="M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z" fill="currentColor"/>', f: '<path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 319.91a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.94v-.05a21.74 21.74 0 1143.44 0z" fill="currentColor"/>' }, stats: { o: '<rect x="64" y="320" width="48" height="160" rx="8" ry="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="288" y="224" width="48" height="256" rx="8" ry="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="400" y="112" width="48" height="368" rx="8" ry="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="176" y="32" width="48" height="448" rx="8" ry="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>', f: '<path d="M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zM328 496h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zM440 496h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zM216 496h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z" fill="currentColor"/>' }, football: { o: '<circle cx="256" cy="256" r="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 175.15l-76.09 63.83L200 320h112l20.09-81.02L256 175.15zM332.09 238.98l52.87-22.4 25.78-73.26M447 269.97l-62.04-53.39M179.91 238.98l-52.87-22.4-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64M192 74.93l64 42.65M312 320l28 48-28 71M410.74 368H342M200 320l-28 48 28.37 71.5M101.63 368H172"/>', f: '<path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm143 304h-45.22a8 8 0 01-6.91-4l-16.14-27.68a8 8 0 01-.86-6l14.86-59.92a8 8 0 014.65-5.45l28.1-11.9a8 8 0 018.34 1.3l41.63 35.82a8 8 0 012.69 7.26 174.75 174.75 0 01-24.28 66.68A8 8 0 01399 352zM134.52 237.13l28.1 11.9a8 8 0 014.65 5.45l14.86 59.92a8 8 0 01-.86 6L165.13 348a8 8 0 01-6.91 4H113a8 8 0 01-6.82-3.81 174.75 174.75 0 01-24.28-66.68 8 8 0 012.69-7.26l41.63-35.82a8 8 0 018.3-1.3zm256.94-87.24l-18.07 51.38A8 8 0 01369 206l-29.58 12.53a8 8 0 01-8.26-1.24L274.9 170.1a8 8 0 01-2.9-6.1v-33.58a8 8 0 013.56-6.65l42.83-28.54a8 8 0 017.66-.67A176.92 176.92 0 01390 142a8 8 0 011.46 7.89zM193.6 95.23l42.84 28.54a8 8 0 013.56 6.65V164a8 8 0 01-2.86 6.13l-56.26 47.19a8 8 0 01-8.26 1.24L143 206a8 8 0 01-4.43-4.72L120.5 149.9a8 8 0 011.5-7.9 176.92 176.92 0 0164-47.48 8 8 0 017.6.71zm17.31 327.46L191.18 373a8 8 0 01.52-7l15.17-26a8 8 0 016.91-4h84.44a8 8 0 016.91 4l15.18 26a8 8 0 01.53 7l-19.59 49.67a8 8 0 01-5.69 4.87 176.58 176.58 0 01-79 0 8 8 0 01-5.65-4.85z" fill="currentColor"/>' }, lock: { o: '<path d="M336 208v-95a80 80 0 00-160 0v95" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><rect x="96" y="208" width="320" height="272" rx="48" ry="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>', f: '<path d="M368 192h-16v-80a96 96 0 10-192 0v80h-16a64.07 64.07 0 00-64 64v176a64.07 64.07 0 0064 64h224a64.07 64.07 0 0064-64V256a64.07 64.07 0 00-64-64zm-48 0H192v-80a64 64 0 11128 0z" fill="currentColor"/>' }, location: { o: '<path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>', f: '<circle cx="256" cy="192" r="32" fill="currentColor"/><path d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0051.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" fill="currentColor"/>' }, stopwatch: { o: '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 232v-80"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 88V72M132 132l-12-12"/><circle cx="256" cy="272" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M256 96a176 176 0 10176 176A176 176 0 00256 96z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/>', f: '<circle cx="256" cy="272" r="16" fill="currentColor"/><path d="M280 81.5V72a24 24 0 00-48 0v9.5a191 191 0 00-84.43 32.13L137 103a24 24 0 00-34 34l8.6 8.6A191.17 191.17 0 0064 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5zM256 320a48 48 0 01-16-93.25V152a16 16 0 0132 0v74.75A48 48 0 01256 320z" fill="currentColor"/>' }, clipboard: { o: '<path d="M336 64h32a48 48 0 0148 48v320a48 48 0 01-48 48H144a48 48 0 01-48-48V112a48 48 0 0148-48h32" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><rect x="176" y="32" width="160" height="64" rx="26.13" ry="26.13" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/>', f: '<path d="M368 48h-11.41a8 8 0 01-7.44-5.08A42.18 42.18 0 00309.87 16H202.13a42.18 42.18 0 00-39.28 26.92 8 8 0 01-7.44 5.08H144a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V112a64 64 0 00-64-64zm-48.13 64H192.13a16 16 0 010-32h127.74a16 16 0 010 32z" fill="currentColor"/>' }, card: { o: '<path d="M384 512H128a64.07 64.07 0 01-64-64V64a64.07 64.07 0 0164-64h256a64.07 64.07 0 0164 64v384a64.07 64.07 0 01-64 64zM128 32a32 32 0 00-32 32v384a32 32 0 0032 32h256a32 32 0 0032-32V64a32 32 0 00-32-32z" fill="currentColor"/><path d="M384 0a64.07 64.07 0 0164 64v384a64.07 64.07 0 01-64 64H128a64.07 64.07 0 01-64-64V64a64.07 64.07 0 0164-64h256M128 480h256a32 32 0 0032-32V64a32 32 0 00-32-32H128a32 32 0 00-32 32v384a32 32 0 0032 32m0-16a16 16 0 01-16-16V64a16 16 0 0116-16h256a16 16 0 0116 16v384a16 16 0 01-16 16z" fill="currentColor"/>' }, boot: { o: '<path fill="currentColor" d="M21 8C20.76 8 20.53 8 20.3 8L20.25 7.97C18.14 7.84 16.38 7.17 15.53 6.23L14 7C13.95 7.1 13.89 7.19 13.84 7.28C14.55 7.89 15 8.65 15 9.5C15 9.83 14.91 10.14 14.79 10.45L12.92 8.58C12.7 8.83 12.47 9.07 12.22 9.29L14.25 11.32C14.04 11.57 13.8 11.79 13.5 12L11.43 9.91C11.14 10.11 10.85 10.28 10.55 10.45L12.58 12.5C12.25 12.63 11.89 12.74 11.5 12.82L9.59 10.91C9.25 11.05 8.91 11.18 8.56 11.29L10.26 13C10.17 13 10.09 13 10 13C8.5 13 7.2 12.54 6.28 11.82C5.46 11.95 4.68 12 4 12C2 12 2 15 2 15V15C2 16.11 2.89 17 4 17H4V18C4 18.55 4.45 19 5 19S6 18.55 6 18V17H7V18C7 18.55 7.45 19 8 19S9 18.55 9 18V17H10V18C10 18.55 10.45 19 11 19S12 18.55 12 18V17H15V18C15 18.55 15.45 19 16 19S17 18.55 17 18V17H18V18C18 18.55 18.45 19 19 19S20 18.55 20 18V17H21C21 17 22 17 22 12.5C22 9 21 8 21 8Z"/>', vb: "0 0 24 24" } };

  // src2/core.jsx
  var React = window.React, h = React.createElement;
  function cx() {
    return Array.prototype.filter.call(arguments, Boolean).join(" ");
  }
  var seq = 0;
  function useUid(prefix) {
    let r = React.useRef(null);
    return r.current == null && (r.current = (prefix || "spv") + "-" + ++seq), r.current;
  }
  function prefersStill() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }
  function lum(hex) {
    let s = String(hex || "").replace("#", "");
    if (s.length === 3 && (s = s.split("").map((c) => c + c).join("")), !/^[0-9a-fA-F]{6}/.test(s)) return null;
    let n = parseInt(s.slice(0, 6), 16), f = (c) => (c /= 255, c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return 0.2126 * f(n >> 16 & 255) + 0.7152 * f(n >> 8 & 255) + 0.0722 * f(n & 255);
  }
  function springCurve(name) {
    let c = SPRINGS[name || "snappy"], pts = [], x = 0, v = 0, dt = 1 / 120;
    for (let i = 0; i < 240; i++) {
      let a = -c.stiffness * (x - 1) - c.damping * v;
      v += a * dt, x += v * dt, pts.push(x);
    }
    return pts;
  }
  function useTick(every, enabled) {
    let [n, setN] = React.useState(0);
    return React.useEffect(() => {
      if (enabled === !1 || prefersStill()) return;
      let t = setInterval(() => setN((k) => k + 1), every);
      return () => clearInterval(t);
    }, [every, enabled]), n;
  }
  function Replay(props) {
    let n = useTick(props.every || 5e3, !0);
    return /* @__PURE__ */ h(React.Fragment, { key: n }, props.children);
  }
  function useCount(target, opts) {
    let o = opts || {}, [v, setV] = React.useState(prefersStill() ? target : o.from != null ? o.from : 0), last = React.useRef(o.from != null ? o.from : 0);
    return React.useEffect(() => {
      if (prefersStill() || typeof target != "number") {
        setV(target);
        return;
      }
      let curve = springCurve(o.spring || "snappy"), start = last.current, i = 0, raf, step = () => {
        i += 1;
        let k = curve[Math.min(i, curve.length - 1)];
        setV(start + (target - start) * k), i < curve.length - 1 ? raf = requestAnimationFrame(step) : (setV(target), last.current = target);
      }, t = setTimeout(() => {
        raf = requestAnimationFrame(step);
      }, o.delay || 0);
      return () => {
        clearTimeout(t), cancelAnimationFrame(raf), last.current = target;
      };
    }, [target, o.replay]), v;
  }
  function SwirlPath(p) {
    return /* @__PURE__ */ h("path", { d: SWIRL, transform: p.transform, fill: p.fill });
  }
  function Defs(p) {
    return /* @__PURE__ */ h("defs", null, /* @__PURE__ */ h("linearGradient", { id: p.uid + "t", x1: "0", y1: "0", x2: "1", y2: "1" }, /* @__PURE__ */ h("stop", { offset: "0", stopColor: "#6FF0E2" }), /* @__PURE__ */ h("stop", { offset: ".45", stopColor: "#13C2B3" }), /* @__PURE__ */ h("stop", { offset: "1", stopColor: "#087F8C" })));
  }
  function Logo(props) {
    let uid = useUid("spv-logo"), kind = props.kind || "lockup", height = props.height || 32, tone = props.tone || "auto", label = props.label || "Sportiverse", anim = props.animate && !prefersStill(), a11y = props.decorative ? { "aria-hidden": "true", focusable: "false" } : { role: "img", "aria-label": label }, wordFill = tone === "white" ? "#FFFFFF" : tone === "midnight" ? "#060B1E" : void 0, markFill = props.markTone === "white" ? "#FFFFFF" : "url(#" + uid + "t)", cls = cx("spv-logo", anim && "is-animated", props.className), fxRef = React.useRef(null), [formed, setFormed] = React.useState(!anim || kind === "wordmark"), white = props.markTone === "white" || kind === "icon" && !props.midnight;
    React.useLayoutEffect(() => {
      if (formed || !fxRef.current) return;
      let c = fxRef.current;
      return playLogoForm(c, { size: +c.dataset.size, S: +c.dataset.s, ink: white ? [1, 1, 1] : null, onDone: () => setFormed(!0) });
    }, []);
    let swirl = (t) => /* @__PURE__ */ h("g", { transform: t }, /* @__PURE__ */ h("g", { className: "spv-logo-swirl" }, /* @__PURE__ */ h(SwirlPath, { animate: anim, uid, transform: "translate(-133 -164)", fill: markFill }))), wx = WORD.x0 - 60, wy = -WORD.top - 60, ww = WORD.x1 - WORD.x0 + 120, wh = WORD.top - WORD.bottom + 120, word = (t) => /* @__PURE__ */ h("g", { transform: t, mask: anim ? "url(#" + uid + "w)" : void 0 }, anim ? /* @__PURE__ */ h("defs", null, /* @__PURE__ */ h("linearGradient", { id: uid + "wf", x1: "0", x2: "1" }, /* @__PURE__ */ h("stop", { offset: "0.9", stopColor: "#fff" }), /* @__PURE__ */ h("stop", { offset: "1", stopColor: "#fff", stopOpacity: "0" })), /* @__PURE__ */ h("mask", { id: uid + "w", maskUnits: "userSpaceOnUse", x: wx, y: wy, width: ww, height: wh }, /* @__PURE__ */ h("rect", { className: "spv-logo-wipe", x: wx, y: wy, width: ww / 0.9, height: wh, fill: "url(#" + uid + "wf)" }))) : null, /* @__PURE__ */ h("path", { d: WORD.d, className: "spv-logo-word", style: wordFill ? { fill: wordFill } : void 0 })), markStyle = formed ? void 0 : { opacity: 0 }, withForm = (svg, w, hgt, size, cxp, cyp, room, clip) => {
      if (formed) return svg;
      let S = Math.round(size * room), fx = /* @__PURE__ */ h("canvas", { ref: fxRef, "data-size": size, "data-s": S, className: "spv-logo-fx", style: { width: S, height: S, left: cxp - S / 2, top: cyp - S / 2 }, "aria-hidden": "true" });
      return /* @__PURE__ */ h("span", { className: "spv-logo-wrap", style: { width: w, height: hgt } }, svg, clip ? /* @__PURE__ */ h("span", { className: "spv-logo-fxclip" }, fx) : fx);
    };
    if (kind === "mark") {
      let w = height * 758 / 696;
      return withForm(
        /* @__PURE__ */ h("svg", { className: cls, viewBox: "0 0 758 696", style: { height, width: w }, ...a11y }, /* @__PURE__ */ h(Defs, { uid }), /* @__PURE__ */ h("g", { className: "spv-logo-spin", style: markStyle }, swirl(""))),
        w,
        height,
        w,
        w / 2,
        height / 2,
        2.2,
        !1
      );
    }
    if (kind === "wordmark") {
      let w = WORD.x1 - WORD.x0, ht = WORD.top - WORD.bottom;
      return /* @__PURE__ */ h("svg", { className: cls, viewBox: WORD.x0 + " " + -WORD.top + " " + w + " " + ht, style: { height, width: height * w / ht }, ...a11y }, /* @__PURE__ */ h(Defs, { uid }), word(""));
    }
    if (kind === "icon") {
      let mid = props.midnight;
      return withForm(
        /* @__PURE__ */ h("svg", { className: cx(cls, "spv-logo-icon"), viewBox: "0 0 1024 1024", style: { height, width: height }, ...a11y }, /* @__PURE__ */ h(Defs, { uid }), /* @__PURE__ */ h("defs", null, /* @__PURE__ */ h("clipPath", { id: uid + "c" }, /* @__PURE__ */ h("rect", { width: "1024", height: "1024", rx: "229" })), /* @__PURE__ */ h("radialGradient", { id: uid + "g", cx: "50%", cy: "50%", r: "55%" }, /* @__PURE__ */ h("stop", { offset: "0", stopColor: "#13C2B3", stopOpacity: "0.28" }), /* @__PURE__ */ h("stop", { offset: "0.6", stopColor: "#13C2B3", stopOpacity: "0.06" }), /* @__PURE__ */ h("stop", { offset: "1", stopColor: "#13C2B3", stopOpacity: "0" }))), /* @__PURE__ */ h("g", { clipPath: "url(#" + uid + "c)" }, /* @__PURE__ */ h("rect", { width: "1024", height: "1024", fill: mid ? "#060B1E" : "url(#" + uid + "t)" }), mid ? /* @__PURE__ */ h("rect", { width: "1024", height: "1024", fill: "url(#" + uid + "g)" }) : null, /* @__PURE__ */ h("g", { className: "spv-logo-spin", style: markStyle }, /* @__PURE__ */ h(SwirlPath, { animate: anim, uid, fill: mid ? "url(#" + uid + "t)" : "#FFFFFF" })))),
        height,
        height,
        height * 758 / 1024,
        height / 2,
        height / 2,
        1024 / 758,
        !0
      );
    }
    let L = LOCK, k = height / (L.bot - L.top), lw = height * L.W / (L.bot - L.top);
    return withForm(
      /* @__PURE__ */ h("svg", { className: cls, viewBox: "0 " + L.top + " " + L.W + " " + (L.bot - L.top), style: { height, width: lw }, ...a11y }, /* @__PURE__ */ h(Defs, { uid }), /* @__PURE__ */ h("g", { transform: "translate(0 " + (L.cy - L.mh / 2) + ") scale(" + L.s + ")" }, /* @__PURE__ */ h("g", { className: "spv-logo-spin", style: markStyle }, swirl(""))), word("translate(" + L.xw + " 0)")),
      lw,
      height,
      L.mw * k,
      L.mw / 2 * k,
      (L.cy - L.top) * k,
      2.2,
      !1
    );
  }
  var ICON_NAMES = Object.keys(LINE_ICONS);
  function Icon(props) {
    let src = LINE_ICONS[props.name];
    if (!src) return null;
    let size = props.size || 24, anim = props.animate && !prefersStill(), a11y = props.label ? { role: "img", "aria-label": props.label } : { "aria-hidden": "true", focusable: "false" };
    return /* @__PURE__ */ h(
      "svg",
      {
        className: cx("spv-icon", props.mono && "is-mono", anim && "is-animated", props.className),
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        fill: "none",
        strokeWidth: props.weight || 1.6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        style: props.style,
        ...a11y
      },
      /* @__PURE__ */ h("g", { className: "spv-i-base", dangerouslySetInnerHTML: { __html: src.b } }),
      /* @__PURE__ */ h("g", { className: "spv-i-accent", dangerouslySetInnerHTML: { __html: src.a } })
    );
  }
  var GLYPH_NAMES = Object.keys(GLYPH_SRC);
  function Glyph(props) {
    let src = GLYPH_SRC[props.name];
    if (!src) return null;
    let size = props.size || 20, a11y = props.label ? { role: "img", "aria-label": props.label } : { "aria-hidden": "true", focusable: "false" };
    return /* @__PURE__ */ h(
      "svg",
      {
        className: cx("spv-glyph", props.className),
        viewBox: src.vb || "0 0 512 512",
        width: size,
        height: size,
        style: Object.assign(props.color ? { color: props.color } : {}, props.style),
        ...a11y,
        dangerouslySetInnerHTML: { __html: props.filled && src.f ? src.f : src.o }
      }
    );
  }
  var EVENT_NAMES = EVENTS.order, EVENT_ALIAS = { "kick-off": "whistle", "half-time": "whistle", "full-time": "whistle" };
  function EventIcon(props) {
    let uid = useUid("spv-e"), name = EVENT_ALIAS[props.name] || props.name, src = EVENTS.icons[name];
    if (!src) return null;
    let size = props.size || 20, color = props.color || EVENTS.colors[name], a11y = props.label ? { role: "img", "aria-label": props.label } : { "aria-hidden": "true", focusable: "false" };
    return /* @__PURE__ */ h(
      "svg",
      {
        className: cx("spv-event", props.animate && !prefersStill() && "is-animated", props.className),
        viewBox: "0 0 24 24",
        width: size,
        height: size,
        style: Object.assign(color ? { color } : {}, props.style),
        ...a11y,
        dangerouslySetInnerHTML: { __html: src.split("{u}").join(uid) }
      }
    );
  }
  function Scene(props) {
    return /* @__PURE__ */ h("div", { "data-theme": "dark", className: cx("spv-scene", props.flush && "is-flush", props.className), style: Object.assign({ minHeight: props.height }, props.style) }, /* @__PURE__ */ h("div", { className: "spv-scene-light", "aria-hidden": "true" }, /* @__PURE__ */ h("span", { className: "spv-blob spv-blob-1" }), /* @__PURE__ */ h("span", { className: "spv-blob spv-blob-2" }), /* @__PURE__ */ h("span", { className: "spv-blob spv-blob-3" }), /* @__PURE__ */ h("span", { className: "spv-blob spv-blob-4" })), /* @__PURE__ */ h("div", { className: "spv-scene-grain", "aria-hidden": "true" }), /* @__PURE__ */ h("div", { className: "spv-scene-content" }, props.children));
  }

  // src2/ui.jsx
  var SHIELD = "M12 1.8l8.6 3v6.4c0 5.2-3.6 9.2-8.6 11-5-1.8-8.6-5.8-8.6-11V4.8L12 1.8Z", CRESTS = {
    oslo: ["#2F6FED", '<path d="' + SHIELD + '" fill="#2F6FED"/><path d="M12 3.9l6.6 2.3v5c0 4-2.7 7.2-6.6 8.7-3.9-1.5-6.6-4.7-6.6-8.7v-5L12 3.9Z" fill="none" stroke="#fff" stroke-width="1"/><circle cx="12" cy="11.4" r="2.4" fill="#fff"/>'],
    haug: ["#C8102E", '<path d="M12 1.8L3.4 4.8v6.4c0 5.2 3.6 9.2 8.6 11V1.8Z" fill="#C8102E"/><path d="M12 1.8l8.6 3v6.4c0 5.2-3.6 9.2-8.6 11V1.8Z" fill="#1F3A93"/>'],
    lyn: ["#6D3FD9", '<circle cx="12" cy="12" r="10.6" fill="#6D3FD9"/><circle cx="12" cy="12" r="8.3" fill="none" stroke="#fff" stroke-width="1"/><path d="M13.3 5.6L8.7 12.9h3.3l-1.2 5.5 4.6-7.3h-3.3l1.2-5.5Z" fill="#fff"/>'],
    frigg: ["#E4B100", '<path d="' + SHIELD + '" fill="#E4B100"/><path d="M12 1.8l8.6 3v3.8H3.4V4.8L12 1.8Z" fill="#111"/>'],
    bergen: ["#157A35", '<circle cx="12" cy="12" r="10.6" fill="#157A35"/><path d="M5.8 10.4c1.5-1.2 2.9-1.2 4.1 0s2.7 1.2 4.1 0 2.7-1.2 4.1 0M5.8 14.2c1.5-1.2 2.9-1.2 4.1 0s2.7 1.2 4.1 0 2.7-1.2 4.1 0" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>'],
    tromsdal: ["#1B2A6B", '<path d="' + SHIELD + '" fill="#1B2A6B"/><path d="M12 6.9l1.12 3.06 3.26.12-2.57 2.01.89 3.13L12 13.4l-2.7 1.82.89-3.13-2.57-2.01 3.26-.12Z" fill="#fff"/>'],
    viken: ["#F26B1D", '<path d="' + SHIELD + '" fill="#F26B1D"/><path d="M10.1 2.45L12 1.8l1.9.65V21.5c-.6.28-1.3.5-1.9.7-.6-.2-1.3-.42-1.9-.7V2.45Z" fill="#fff"/>'],
    nordlys: ["#7A1F3D", '<circle cx="12" cy="12" r="10.6" fill="#7A1F3D"/><path d="M5.2 16.6l4.4-6.2 2.7 3.5 2-2.5 4.5 5.2Z" fill="#fff"/>'],
    ski: ["#2E9CDB", '<circle cx="12" cy="12" r="10.6" fill="#2E9CDB"/><path d="M12 6v12M6.8 9l10.4 6M6.8 15l10.4-6" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>'],
    fjell: ["#0F5132", '<path d="' + SHIELD + '" fill="#0F5132"/><path d="M6.4 15.6l4-6.2 2.1 3 1.8-2.3 3.3 5.5Z" fill="#fff"/>'],
    kvikk: ["#111111", '<path d="' + SHIELD + '" fill="#111"/><path d="M8.4 4.2v13.4M12 3.2v17.4M15.6 4.2v13.4" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>'],
    sol: ["#C9A227", '<circle cx="12" cy="12" r="10.6" fill="#C9A227"/><circle cx="12" cy="12" r="6.4" fill="none" stroke="#fff" stroke-width="1.2"/><circle cx="12" cy="12" r="3.4" fill="#fff"/>']
  };
  function visibleColor(color, fallback) {
    if (!color) return fallback;
    let dark = typeof document != "undefined" && document.documentElement.getAttribute("data-theme") === "dark", l = lum(color);
    return dark && l < 0.04 || !dark && l > 0.8 ? fallback : color;
  }
  function clubColor(club, fallback) {
    if (!club) return fallback;
    let c = club.color || club.crest && CRESTS[club.crest] && CRESTS[club.crest][0];
    return visibleColor(c, fallback);
  }
  function LogoImage(props) {
    let size = props.size || 24, crest = props.crest && CRESTS[props.crest], label = props.name ? props.name : void 0;
    return props.src ? /* @__PURE__ */ h("img", { className: "spv-logoimg", src: props.src, width: size, height: size, alt: label || "" }) : crest ? /* @__PURE__ */ h("svg", { className: "spv-logoimg", viewBox: "0 0 24 24", width: size, height: size, role: label ? "img" : void 0, "aria-label": label, "aria-hidden": label ? void 0 : "true", dangerouslySetInnerHTML: { __html: crest[1] } }) : /* @__PURE__ */ h("span", { className: "spv-logoimg is-fallback", style: { width: size, height: size }, role: label ? "img" : void 0, "aria-label": label }, /* @__PURE__ */ h(Glyph, { name: props.fallback || "shield", size: Math.round(size * 0.56) }));
  }
  function ProfileAvatar(props) {
    let size = props.size || 40, initials = (props.name || "").split(" ").filter(Boolean).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
    return /* @__PURE__ */ h("span", { className: "spv-avatar", style: { width: size, height: size, fontSize: Math.round(size * 0.36) }, role: "img", "aria-label": props.name }, props.src ? /* @__PURE__ */ h("img", { src: props.src, alt: "" }) : initials);
  }
  function Button(props) {
    let variant = props.variant || "primary", size = props.size || "sm";
    return /* @__PURE__ */ h(
      "button",
      {
        type: "button",
        className: cx("spv-btn", "spv-press", "spv-btn--" + variant, "spv-btn--" + size, props.fullWidth && "is-full", props.isLoading && "is-loading", props.className),
        disabled: props.disabled || props.isLoading,
        "aria-busy": props.isLoading ? "true" : void 0,
        onClick: props.onPress,
        style: props.style
      },
      /* @__PURE__ */ h("span", { className: "spv-btn-label" }, props.iconName ? /* @__PURE__ */ h(Glyph, { name: props.iconName, size: size === "xs" ? 14 : 18 }) : null, props.children),
      props.isLoading ? /* @__PURE__ */ h("span", { className: "spv-btn-flow", "aria-hidden": "true" }) : null
    );
  }
  function IconButton(props) {
    let size = props.size === "sm" ? 32 : 44;
    return /* @__PURE__ */ h("button", { type: "button", className: cx("spv-iconbtn", "spv-press", "spv-iconbtn--" + (props.variant || "plain"), props.className), style: { width: size, height: size }, "aria-label": props.label, onClick: props.onPress }, /* @__PURE__ */ h(Glyph, { name: props.name, size: props.size === "sm" ? 18 : 20, filled: props.filled }), props.badge ? /* @__PURE__ */ h("span", { className: "spv-badge" }, props.badge) : null);
  }
  function Chip(props) {
    return /* @__PURE__ */ h("button", { type: "button", className: cx("spv-chip", "spv-press", props.selected && "is-selected", props.className), "aria-pressed": !!props.selected, onClick: props.onPress }, props.dot ? /* @__PURE__ */ h("span", { className: "spv-chip-dot", style: { background: props.dot } }) : null, props.leading || null, props.label, props.menu ? /* @__PURE__ */ h(Glyph, { name: "chevron-down", size: 12, weight: 2.4 }) : null);
  }
  function ToggleButton(props) {
    let options = props.options || [], [inner, setInner] = React.useState(props.defaultValue || options[0] && options[0].value), value = props.value !== void 0 ? props.value : inner, index = Math.max(0, options.findIndex((o) => o.value === value)), pick = (v) => {
      setInner(v), props.onChange && props.onChange(v);
    };
    return /* @__PURE__ */ h("div", { className: cx("spv-seg", props.className), role: "group", "aria-label": props.label, style: { "--spv-n": options.length, "--spv-i": index } }, /* @__PURE__ */ h("span", { className: "spv-seg-thumb", "aria-hidden": "true" }), options.map((o) => /* @__PURE__ */ h("button", { key: o.value, type: "button", className: cx("spv-seg-opt", o.value === value && "is-on"), "aria-pressed": o.value === value, onClick: () => pick(o.value) }, o.label)));
  }
  function Switch(props) {
    let [inner, setInner] = React.useState(!!props.defaultValue), on = props.value !== void 0 ? props.value : inner;
    return /* @__PURE__ */ h("button", { type: "button", role: "switch", "aria-checked": on, "aria-label": props.label, className: cx("spv-switch", on && "is-on"), onClick: () => {
      setInner(!on), props.onValueChange && props.onValueChange(!on);
    } }, /* @__PURE__ */ h("span", { className: "spv-switch-knob" }));
  }
  function Input(props) {
    return /* @__PURE__ */ h("label", { className: cx("spv-input", props.search && "is-search", props.className) }, props.search ? /* @__PURE__ */ h(Glyph, { name: "search", size: 18, weight: 2 }) : null, /* @__PURE__ */ h("input", { type: props.search ? "search" : props.type || "text", placeholder: props.placeholder, defaultValue: props.defaultValue, "aria-label": props.label || props.placeholder }));
  }
  function Card(props) {
    let Tag = props.onPress ? "button" : "section";
    return /* @__PURE__ */ h(Tag, { type: props.onPress ? "button" : void 0, className: cx("spv-card", props.onPress && "is-pressable spv-press", props.flush && "is-flush", props.className), onClick: props.onPress, style: props.style }, props.title ? /* @__PURE__ */ h("div", { className: cx("spv-card-head", props.titleAlign === "start" && "is-start") }, props.titleAlign === "start" ? null : /* @__PURE__ */ h("span", { className: "spv-card-head-side" }), /* @__PURE__ */ h("span", { className: "spv-card-title" }, props.title, props.subtitle ? /* @__PURE__ */ h("span", { className: "spv-card-sub" }, " ", props.subtitle) : null), /* @__PURE__ */ h("span", { className: "spv-card-head-side is-end" }, props.action || null)) : null, props.children);
  }
  function SectionHeader(props) {
    return /* @__PURE__ */ h("div", { className: "spv-section-head" }, /* @__PURE__ */ h("h2", { className: "spv-t-subtitle" }, props.title, props.subtitle ? /* @__PURE__ */ h("span", { className: "spv-muted spv-section-sub" }, props.subtitle) : null), props.action ? /* @__PURE__ */ h("button", { type: "button", className: "spv-link", onClick: props.onAction }, props.action) : null, props.trailing || null);
  }
  function ListRow(props) {
    let Tag = props.onPress || props.chevron ? "button" : "div";
    return /* @__PURE__ */ h(Tag, { type: Tag === "button" ? "button" : void 0, className: cx("spv-row", Tag === "button" && "is-pressable"), onClick: props.onPress }, props.leading ? /* @__PURE__ */ h("span", { className: "spv-row-leading" }, props.leading) : null, /* @__PURE__ */ h("span", { className: "spv-row-body" }, /* @__PURE__ */ h("span", { className: "spv-row-title" }, props.title), props.subtitle ? /* @__PURE__ */ h("span", { className: "spv-row-sub" }, props.subtitle) : null), props.trailing ? /* @__PURE__ */ h("span", { className: "spv-row-trailing" }, props.trailing) : null, props.chevron ? /* @__PURE__ */ h("span", { className: "spv-row-chev" }, /* @__PURE__ */ h(Glyph, { name: "chevron", size: 16 })) : null);
  }
  function Badge(props) {
    return /* @__PURE__ */ h("span", { className: cx("spv-badge", "is-inline", props.className) }, props.count);
  }
  function UnreadDot(props) {
    return /* @__PURE__ */ h("span", { className: cx("spv-unread-dot", props.className), "aria-label": props.label || "Unread", role: "img" });
  }
  function Skeleton(props) {
    let v = props.variant || "match", n = props.count || 3, bar = (w, hgt, r) => /* @__PURE__ */ h("span", { className: "spv-sk", style: { width: w, height: hgt || 12, borderRadius: r } });
    return v === "feed" ? /* @__PURE__ */ h("div", { className: "spv-card spv-sk-card", "aria-busy": "true", "aria-label": "Loading" }, /* @__PURE__ */ h("span", { className: "spv-sk-line" }, bar(16, 16, 8), bar(90), /* @__PURE__ */ h("span", { style: { flex: 1 } }), bar(36)), bar("72%", 16), bar("44%"), bar("100%", 48, 12), /* @__PURE__ */ h("span", { className: "spv-sk-line" }, bar(44, 20), bar(44, 20))) : /* @__PURE__ */ h("div", { className: "spv-card spv-sk-card is-rows", "aria-busy": "true", "aria-label": "Loading" }, Array.from({ length: n }).map((_, i) => /* @__PURE__ */ h("span", { key: i, className: "spv-sk-match" }, bar(26, 12), /* @__PURE__ */ h("span", { style: { flex: 1, display: "flex", justifyContent: "flex-end" } }, bar(i % 2 ? 64 : 86)), bar(20, 20, 10), bar(34, 14), bar(20, 20, 10), /* @__PURE__ */ h("span", { style: { flex: 1 } }, bar(i % 2 ? 90 : 70)))));
  }
  function EmptyState(props) {
    return /* @__PURE__ */ h("div", { className: "spv-empty" }, /* @__PURE__ */ h("span", { className: "spv-empty-icon" }, props.glyph ? /* @__PURE__ */ h(Glyph, { name: props.glyph, size: 30 }) : /* @__PURE__ */ h(Icon, { name: props.icon || "club", size: 32, mono: !0 })), /* @__PURE__ */ h("span", { className: "spv-t-subtitle" }, props.title), props.message ? /* @__PURE__ */ h("span", { className: "spv-t-caption spv-muted spv-center" }, props.message) : null, props.action ? /* @__PURE__ */ h(Button, { variant: "secondary", size: "sm", onPress: props.onAction }, props.action) : null);
  }
  function ratingBand(r) {
    return r == null ? "none" : r >= 9 ? "elite" : r >= 7 ? "good" : r >= 5 ? "ok" : "poor";
  }
  function PlayerMatchRating(props) {
    let r = props.rating;
    return /* @__PURE__ */ h("span", { className: cx("spv-rating", "is-" + ratingBand(r), props.size && "is-" + props.size, props.className), "aria-label": r == null ? "No rating" : "Rating " + r.toFixed(1) }, r == null ? "\u2013" : r.toFixed(1));
  }
  function StatBar(props) {
    let home = props.home, away = props.away, fmt = props.format || ((v) => String(v)), hc = props.homeColor || "var(--chart-home)", ac = props.awayColor || "var(--chart-away)";
    if (props.kind === "split") {
      let total = home + away || 1;
      return /* @__PURE__ */ h("div", { className: "spv-split", role: "img", "aria-label": props.label + ": " + fmt(home) + " against " + fmt(away) }, /* @__PURE__ */ h("span", { className: "spv-split-label" }, props.label), /* @__PURE__ */ h("span", { className: "spv-split-bar" }, /* @__PURE__ */ h("span", { style: { flex: home / total, background: hc } }, fmt(home)), /* @__PURE__ */ h("span", { style: { flex: away / total, background: ac } }, fmt(away))));
    }
    let lead = props.lowerIsBetter ? home < away ? "home" : away < home ? "away" : null : home > away ? "home" : away > home ? "away" : null;
    return /* @__PURE__ */ h("div", { className: "spv-stat" }, /* @__PURE__ */ h("span", { className: "spv-stat-v" }, lead === "home" ? /* @__PURE__ */ h("span", { className: "spv-stat-pill", style: { background: hc } }, fmt(home)) : /* @__PURE__ */ h("span", { className: "spv-stat-plain" }, fmt(home))), /* @__PURE__ */ h("span", { className: "spv-stat-label" }, props.label), /* @__PURE__ */ h("span", { className: "spv-stat-v is-away" }, lead === "away" ? /* @__PURE__ */ h("span", { className: "spv-stat-pill", style: { background: ac } }, fmt(away)) : /* @__PURE__ */ h("span", { className: "spv-stat-plain" }, fmt(away))));
  }
  function ResultsRow(props) {
    return /* @__PURE__ */ h("div", { className: "spv-tiles" }, /* @__PURE__ */ h("div", { className: "spv-tile" }, /* @__PURE__ */ h("span", { className: "spv-t-stat" }, props.matches), /* @__PURE__ */ h("span", { className: "spv-t-caption spv-muted" }, "Matches")), /* @__PURE__ */ h("div", { className: "spv-tile" }, /* @__PURE__ */ h("span", { className: "spv-t-stat" }, props.minutes), /* @__PURE__ */ h("span", { className: "spv-t-caption spv-muted" }, "Minutes", props.avgMinutes != null ? " (" + props.avgMinutes + " avg)" : "")), /* @__PURE__ */ h("div", { className: "spv-tile" }, /* @__PURE__ */ h(PlayerMatchRating, { rating: props.rating, size: "lg" }), /* @__PURE__ */ h("span", { className: "spv-t-caption spv-muted" }, "Rating")));
  }
  var AXES = ["FIN", "DRI", "DEF", "PAS", "AGG"];
  function CharacteristicsRadar(props) {
    let v = props.values || {}, W = 326, cx0 = 163, cy0 = 112, R = 78, pt = (i, r) => {
      let a = (-90 + 72 * i) * Math.PI / 180;
      return [cx0 + r * Math.cos(a), cy0 + r * Math.sin(a)];
    }, poly = (f) => AXES.map((_, i) => pt(i, R * f(i)).map((n) => n.toFixed(1)).join(",")).join(" "), vals = AXES.map((k) => Math.max(0, Math.min(100, v[k] || 0)) / 100), label = AXES.map((k) => k + " " + (v[k] || 0)).join(", "), anchor = ["middle", "start", "start", "end", "end"];
    return /* @__PURE__ */ h("svg", { className: "spv-radar", viewBox: "0 0 " + W + " 208", role: "img", "aria-label": "Characteristics: " + label }, /* @__PURE__ */ h("g", { className: "spv-radar-grid" }, [0.25, 0.5, 0.75, 1].map((f) => /* @__PURE__ */ h("polygon", { key: f, points: poly(() => f) })), AXES.map((_, i) => {
      let p = pt(i, R);
      return /* @__PURE__ */ h("line", { key: i, x1: cx0, y1: cy0, x2: p[0], y2: p[1] });
    })), /* @__PURE__ */ h("polygon", { className: "spv-radar-shape", points: poly((i) => vals[i]) }), AXES.map((_, i) => {
      let p = pt(i, R * vals[i]);
      return /* @__PURE__ */ h("circle", { key: i, className: "spv-radar-dot", cx: p[0], cy: p[1], r: "3.5" });
    }), AXES.map((k, i) => {
      let p = pt(i, R + 18);
      return /* @__PURE__ */ h("text", { key: k, x: p[0], y: p[1] + 4, textAnchor: anchor[i], className: "spv-radar-label" }, k, " ", /* @__PURE__ */ h("tspan", { className: "spv-radar-val" }, v[k] || 0));
    }));
  }
  function DetailHeader(props) {
    return /* @__PURE__ */ h("header", { className: cx("spv-dhead", props.className) }, /* @__PURE__ */ h("div", { className: "spv-dhead-bar" }, props.onBack ? /* @__PURE__ */ h(IconButton, { name: "back", label: "Back", onPress: props.onBack }) : /* @__PURE__ */ h("span", { className: "spv-dhead-spacer" }), /* @__PURE__ */ h("span", { className: "spv-dhead-center" }, props.center || null), /* @__PURE__ */ h("span", { className: "spv-dhead-buttons" }, (props.buttons || []).map((b) => /* @__PURE__ */ h(IconButton, { key: b.name, name: b.name, label: b.label, badge: b.badge, onPress: b.onPress })))), props.title ? /* @__PURE__ */ h("div", { className: "spv-dhead-id" }, /* @__PURE__ */ h("span", { className: "spv-dhead-logo" }, props.logo || /* @__PURE__ */ h(Glyph, { name: props.icon || "shield", size: 28 })), /* @__PURE__ */ h("span", { className: "spv-dhead-text" }, /* @__PURE__ */ h("span", { className: "spv-t-title" }, props.title), props.subtitle ? /* @__PURE__ */ h("span", { className: "spv-t-caption spv-muted spv-dhead-sub" }, props.subtitle) : null)) : null, props.children, props.actions ? /* @__PURE__ */ h("div", { className: "spv-dhead-actions" }, props.actions) : null, props.tabs ? /* @__PURE__ */ h(DetailTabs, { tabs: props.tabs, value: props.tab, onChange: props.onTab }) : null);
  }
  function DetailTabs(props) {
    let tabs = props.tabs || [], [inner, setInner] = React.useState(tabs[0]), value = props.value !== void 0 ? props.value : inner;
    return /* @__PURE__ */ h("div", { className: cx("spv-dtabs", props.className), role: "tablist" }, tabs.map((t) => /* @__PURE__ */ h("button", { key: t, type: "button", role: "tab", "aria-selected": t === value, className: cx("spv-dtab", t === value && "is-on"), onClick: () => {
      setInner(t), props.onChange && props.onChange(t);
    } }, t, /* @__PURE__ */ h("span", { className: "spv-dtab-bar" }))));
  }
  var TABS = [
    { key: "global", glyph: "globe", label: "Global" },
    { key: "league", glyph: "trophy", label: "League" },
    { key: "club", glyph: "shield", label: "Club" },
    { key: "profile", glyph: "person", label: "Profile" }
  ];
  function TabBar(props) {
    let [inner, setInner] = React.useState(props.value || "global"), value = props.value !== void 0 ? props.value : inner;
    return /* @__PURE__ */ h("nav", { className: cx("spv-tabbar", "spv-glass", props.className), "aria-label": "Tabs" }, TABS.map((t) => /* @__PURE__ */ h("button", { key: t.key, type: "button", className: cx("spv-tabbar-item", t.key === value && "is-on"), "aria-label": t.label, "aria-current": t.key === value ? "page" : void 0, onClick: () => {
      setInner(t.key), props.onChange && props.onChange(t.key);
    } }, /* @__PURE__ */ h(Glyph, { name: t.glyph, size: 26, filled: t.key === value }), t.key === "global" && props.badge ? /* @__PURE__ */ h("span", { className: "spv-badge" }, props.badge) : null)));
  }

  // src2/match.jsx
  var FLAGS = {
    no: '<rect width="22" height="16" rx="2.5" fill="#BA0C2F"/><rect x="6" width="4" height="16" fill="#fff"/><rect y="6" width="22" height="4" fill="#fff"/><rect x="7" width="2" height="16" fill="#00205B"/><rect y="7" width="22" height="2" fill="#00205B"/>'
  };
  function Flag(props) {
    let src = FLAGS[props.country];
    return src ? /* @__PURE__ */ h("svg", { className: "spv-flag", width: props.size || 20, height: Math.round((props.size || 20) * 16 / 22), viewBox: "0 0 22 16", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: src } }) : /* @__PURE__ */ h(Glyph, { name: "globe", size: 14 });
  }
  function LiveTimer(props) {
    let s = props.status || "live";
    return s === "live" ? /* @__PURE__ */ h("span", { className: cx("spv-live", props.size === "lg" && "is-lg"), "aria-label": "Live, " + props.minute + " minutes" }, /* @__PURE__ */ h("span", { className: "spv-live-dot", "aria-hidden": "true" }), props.minute, "\u2032") : s === "ht" || s === "ft" ? /* @__PURE__ */ h("span", { className: "spv-status" }, s.toUpperCase()) : /* @__PURE__ */ h("span", { className: "spv-kickoff" }, props.time);
  }
  function PredictionBar(props) {
    let p = props.prediction || { home: 0, draw: 0, away: 0 }, hc = props.homeColor || "var(--chart-home)", ac = props.awayColor || "var(--chart-away)";
    return /* @__PURE__ */ h("div", { className: cx("spv-pred", props.className), role: "img", "aria-label": "Win chance: " + (props.homeName || "home") + " " + p.home + " percent, draw " + p.draw + ", " + (props.awayName || "away") + " " + p.away }, /* @__PURE__ */ h("span", { className: "spv-pred-bar" }, /* @__PURE__ */ h("span", { style: { flex: p.home, background: hc } }), /* @__PURE__ */ h("span", { style: { flex: p.draw, background: "var(--chart-draw)" } }), /* @__PURE__ */ h("span", { style: { flex: p.away, background: ac } })), /* @__PURE__ */ h("span", { className: "spv-pred-labels" }, /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("b", null, p.home, "%"), props.homeName ? " " + props.homeName : ""), /* @__PURE__ */ h("span", null, "Draw ", p.draw, "%"), /* @__PURE__ */ h("span", null, props.awayName ? props.awayName + " " : "", /* @__PURE__ */ h("b", null, p.away, "%"))));
  }
  function MatchListItem(props) {
    let m = props.match || {}, played = m.status === "live" || m.status === "ht" || m.status === "ft", winner = m.status === "ft" ? m.homeScore > m.awayScore ? "home" : m.awayScore > m.homeScore ? "away" : null : null;
    return /* @__PURE__ */ h("button", { type: "button", className: "spv-match spv-press", onClick: props.onPress, "aria-label": m.home.name + " against " + m.away.name }, /* @__PURE__ */ h("span", { className: "spv-match-status" }, m.status === "scheduled" ? null : /* @__PURE__ */ h(LiveTimer, { status: m.status, minute: m.minute })), /* @__PURE__ */ h("span", { className: cx("spv-match-name is-home", winner === "away" && "is-lost") }, m.home.name), /* @__PURE__ */ h(LogoImage, { crest: m.home.crest, size: 20 }), /* @__PURE__ */ h("span", { className: "spv-match-score" }, played ? m.homeScore + " - " + m.awayScore : /* @__PURE__ */ h("span", { className: "spv-muted" }, m.time)), /* @__PURE__ */ h(LogoImage, { crest: m.away.crest, size: 20 }), /* @__PURE__ */ h("span", { className: cx("spv-match-name", winner === "home" && "is-lost") }, m.away.name));
  }
  function MatchCompetitionSection(props) {
    return /* @__PURE__ */ h("section", { className: "spv-card spv-comp" }, props.name ? /* @__PURE__ */ h("button", { type: "button", className: "spv-comp-head", onClick: props.onPress }, props.country ? /* @__PURE__ */ h(Flag, { country: props.country }) : props.logo || null, /* @__PURE__ */ h("span", { className: "spv-comp-name" }, props.name), /* @__PURE__ */ h(Glyph, { name: "chevron", size: 16 })) : null, props.children);
  }
  function MatchDetailHeader(props) {
    let m = props.match || {}, played = m.status !== "scheduled";
    return props.compact ? /* @__PURE__ */ h("header", { className: "spv-mhead is-compact" }, /* @__PURE__ */ h("div", { className: "spv-dhead-bar" }, /* @__PURE__ */ h(IconButton, { name: "back", label: "Back", onPress: props.onBack }), /* @__PURE__ */ h("span", { className: "spv-mhead-mini" }, /* @__PURE__ */ h(LogoImage, { crest: m.home.crest, size: 22 }), /* @__PURE__ */ h("span", { className: "spv-t-score-sm" }, played ? m.homeScore + " - " + m.awayScore : m.time), /* @__PURE__ */ h(LogoImage, { crest: m.away.crest, size: 22 }), m.status === "live" ? /* @__PURE__ */ h(LiveTimer, { status: "live", minute: m.minute }) : null), /* @__PURE__ */ h(IconButton, { name: "share", label: "Share match" })), props.tabs ? /* @__PURE__ */ h(DetailTabs, { tabs: props.tabs, value: props.tab, onChange: props.onTab }) : null) : /* @__PURE__ */ h("header", { className: "spv-mhead" }, /* @__PURE__ */ h("div", { className: "spv-dhead-bar" }, /* @__PURE__ */ h(IconButton, { name: "back", label: "Back", onPress: props.onBack }), /* @__PURE__ */ h("span", { className: "spv-mhead-comp" }, m.country ? /* @__PURE__ */ h(Flag, { country: m.country, size: 16 }) : null, m.competition), /* @__PURE__ */ h(IconButton, { name: "share", label: "Share match" })), /* @__PURE__ */ h("div", { className: "spv-mhead-teams" }, /* @__PURE__ */ h("span", { className: "spv-mhead-club" }, /* @__PURE__ */ h(LogoImage, { crest: m.home.crest, size: 52 }), /* @__PURE__ */ h("span", { className: "spv-t-heading" }, m.home.name)), /* @__PURE__ */ h("span", { className: "spv-mhead-mid" }, /* @__PURE__ */ h("span", { className: "spv-t-score" }, played ? m.homeScore + " - " + m.awayScore : m.time), played ? /* @__PURE__ */ h(LiveTimer, { status: m.status, minute: m.minute, size: "lg" }) : /* @__PURE__ */ h("span", { className: "spv-t-caption spv-muted" }, m.date)), /* @__PURE__ */ h("span", { className: "spv-mhead-club" }, /* @__PURE__ */ h(LogoImage, { crest: m.away.crest, size: 52 }), /* @__PURE__ */ h("span", { className: "spv-t-heading" }, m.away.name))), m.venue ? /* @__PURE__ */ h("span", { className: "spv-t-caption spv-muted spv-center spv-mhead-venue" }, m.venue) : null, m.prediction ? /* @__PURE__ */ h(PredictionBar, { prediction: m.prediction, homeColor: clubColor(m.home, "var(--chart-home)"), awayColor: clubColor(m.away, "var(--chart-away)"), className: "spv-mhead-pred" }) : null, props.tabs ? /* @__PURE__ */ h(DetailTabs, { tabs: props.tabs, value: props.tab, onChange: props.onTab }) : null);
  }
  var EVENT_LABEL = { goal: "Goal", "own-goal": "Own goal", penalty: "Penalty", "yellow-card": "Yellow card", "red-card": "Red card", substitution: "Substitution", corner: "Corner", offside: "Offside", "free-kick": "Free kick", "goal-kick": "Goal kick" };
  function MatchEventItem(props) {
    let e = props.event || {};
    if (e.type === "period")
      return /* @__PURE__ */ h("div", { className: "spv-ev-period" }, /* @__PURE__ */ h("span", null, e.label));
    let body = /* @__PURE__ */ h("span", { className: cx("spv-ev-body", e.side === "away" && "is-away") }, e.type === "substitution" ? /* @__PURE__ */ h(React.Fragment, null, /* @__PURE__ */ h("span", { className: "spv-ev-on" }, e.player), /* @__PURE__ */ h("span", { className: "spv-ev-off" }, e.playerOff)) : /* @__PURE__ */ h(React.Fragment, null, /* @__PURE__ */ h("span", { className: "spv-ev-player" }, e.player), e.score || e.detail ? /* @__PURE__ */ h("span", { className: "spv-ev-detail" }, e.score ? /* @__PURE__ */ h("span", { className: "spv-ev-score" }, e.score) : null, e.score && e.detail ? " \xB7 " : "", e.detail) : null)), icon = /* @__PURE__ */ h("span", { className: "spv-ev-icon" }, /* @__PURE__ */ h(EventIcon, { name: e.type, size: 20, label: EVENT_LABEL[e.type] || e.type }));
    return /* @__PURE__ */ h("div", { className: cx("spv-ev", "is-" + (e.side || "home")) }, e.side === "away" ? /* @__PURE__ */ h("span", null) : body, e.side === "away" ? /* @__PURE__ */ h("span", null) : icon, /* @__PURE__ */ h("span", { className: "spv-ev-minute" }, e.minute, "\u2032"), e.side === "away" ? icon : /* @__PURE__ */ h("span", null), e.side === "away" ? body : /* @__PURE__ */ h("span", null));
  }
  var MOMENTUM_EVENTS = { goal: !0, penalty: !0, "red-card": !0 };
  function areaPath(points, sign, W, B2, A, upTo) {
    let d = "M0 " + B2;
    return points.forEach((p) => {
      let v = sign > 0 ? Math.max(p[1], 0) : Math.min(p[1], 0);
      d += "L" + (p[0] / 90 * W).toFixed(1) + " " + (B2 - v * A).toFixed(1);
    }), d + "L" + (upTo / 90 * W).toFixed(1) + " " + B2 + "Z";
  }
  function MomentumChart(props) {
    let pts = props.points || [], W = 326, H = 120, B2 = 60, A = 52, upTo = props.minute || 90, hc = props.homeColor || "var(--chart-home)", ac = props.awayColor || "var(--chart-away)", evs = (props.events || []).filter((e) => MOMENTUM_EVENTS[e.type]);
    return /* @__PURE__ */ h("div", { className: "spv-mom" }, /* @__PURE__ */ h("div", { className: "spv-mom-plot" }, evs.map((e, i) => /* @__PURE__ */ h("span", { key: i, className: cx("spv-mom-ev", e.side === "away" && "is-away"), style: { left: "calc(" + (e.minute / 90 * 100).toFixed(2) + "% - 8px)" } }, /* @__PURE__ */ h(EventIcon, { name: e.type, size: 16, label: EVENT_LABEL[e.type] + " " + e.minute + "\u2032" }))), /* @__PURE__ */ h("svg", { className: "spv-mom-svg", viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "none", role: "img", "aria-label": props.label || "Match momentum" }, /* @__PURE__ */ h("line", { className: "spv-guide", x1: W / 2, y1: "0", x2: W / 2, y2: H, vectorEffect: "non-scaling-stroke" }), upTo < 90 ? /* @__PURE__ */ h("line", { className: "spv-guide", x1: upTo / 90 * W, y1: B2, x2: W, y2: B2, vectorEffect: "non-scaling-stroke" }) : null, /* @__PURE__ */ h("path", { d: areaPath(pts, 1, W, B2, A, upTo), style: { fill: hc } }), /* @__PURE__ */ h("path", { d: areaPath(pts, -1, W, B2, A, upTo), style: { fill: ac } }))), /* @__PURE__ */ h(MinuteAxis, { minute: upTo < 90 ? upTo : null }));
  }
  function MinuteAxis(props) {
    return /* @__PURE__ */ h("div", { className: "spv-axis" }, /* @__PURE__ */ h("span", { style: { left: 0 } }, "0\u2032"), /* @__PURE__ */ h("span", { style: { left: "50%", transform: "translateX(-50%)" } }, "HT"), props.minute ? /* @__PURE__ */ h("span", { className: "is-live", style: { left: (props.minute / 90 * 100).toFixed(2) + "%", transform: "translateX(-50%)" } }, props.minute, "\u2032") : null, /* @__PURE__ */ h("span", { style: { right: 0 } }, "FT"));
  }
  function WinProbabilityChart(props) {
    let s = props.series || [], W = 326, H = 100, upTo = props.minute || 90, hc = props.homeColor || "var(--chart-home)", ac = props.awayColor || "var(--chart-away)", X = (m) => (m / 90 * W).toFixed(1), homeEdge = s.map((p) => X(p[0]) + " " + (p[1] * H).toFixed(1)), drawEdge = s.map((p) => X(p[0]) + " " + ((p[1] + p[2]) * H).toFixed(1)), last = X(upTo), home = "M0 0L" + homeEdge.join("L") + "L" + last + " 0Z", draw = "M" + homeEdge.join("L") + "L" + drawEdge.slice().reverse().join("L") + "Z", away = "M" + drawEdge.join("L") + "L" + last + " " + H + "L0 " + H + "Z", now = s[s.length - 1] || [0, 0.33, 0.34], pct = (v) => Math.round(v * 100);
    return /* @__PURE__ */ h("div", { className: "spv-wp" }, /* @__PURE__ */ h("div", { className: "spv-wp-legend" }, /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("i", { style: { background: hc } }), props.homeName, " ", /* @__PURE__ */ h("b", null, pct(now[1]), "%")), /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("i", { style: { background: "var(--chart-draw)" } }), "Draw ", /* @__PURE__ */ h("b", null, pct(now[2]), "%")), /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("i", { style: { background: ac } }), props.awayName, " ", /* @__PURE__ */ h("b", null, pct(1 - now[1] - now[2]), "%"))), /* @__PURE__ */ h("svg", { className: "spv-wp-svg", viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "none", role: "img", "aria-label": props.label || "Win probability over the match" }, /* @__PURE__ */ h("path", { d: home, style: { fill: hc } }), /* @__PURE__ */ h("path", { d: draw, style: { fill: "var(--chart-draw)" } }), /* @__PURE__ */ h("path", { d: away, style: { fill: ac } }), upTo < 90 ? /* @__PURE__ */ h("line", { className: "spv-guide is-now", x1: last, y1: "0", x2: last, y2: H, vectorEffect: "non-scaling-stroke" }) : null), /* @__PURE__ */ h("div", { className: "spv-wp-marks", "aria-hidden": "true" }, (props.goals || []).map((g, i) => /* @__PURE__ */ h("span", { key: i, className: "spv-wp-mark", style: { left: (g.minute / 90 * 100).toFixed(2) + "%", top: ((g.at || 0.5) * 100).toFixed(1) + "%", borderColor: g.side === "away" ? ac : hc } }))), /* @__PURE__ */ h(MinuteAxis, { minute: upTo < 90 ? upTo : null }));
  }
  function FormationDisplay(props) {
    let color = props.teamColor || "var(--chart-home)";
    return /* @__PURE__ */ h("div", { className: "spv-pitch", role: "group", "aria-label": props.title || "Formation" }, /* @__PURE__ */ h("svg", { className: "spv-pitch-lines", viewBox: "0 0 334 392", preserveAspectRatio: "none", "aria-hidden": "true" }, /* @__PURE__ */ h("rect", { x: "8", y: "8", width: "318", height: "376", rx: "4" }), /* @__PURE__ */ h("line", { x1: "8", y1: "196", x2: "326", y2: "196" }), /* @__PURE__ */ h("ellipse", { cx: "167", cy: "196", rx: "42", ry: "42" }), /* @__PURE__ */ h("rect", { x: "79", y: "8", width: "176", height: "62" }), /* @__PURE__ */ h("rect", { x: "127", y: "8", width: "80", height: "24" }), /* @__PURE__ */ h("rect", { x: "79", y: "322", width: "176", height: "62" }), /* @__PURE__ */ h("rect", { x: "127", y: "360", width: "80", height: "24" })), (props.players || []).map((p, i) => /* @__PURE__ */ h("button", { key: i, type: "button", className: "spv-fp", style: { left: p.x + "%", top: p.y + "%" }, "aria-label": p.name + (p.rating != null ? ", rating " + p.rating.toFixed(1) : "") }, /* @__PURE__ */ h("span", { className: "spv-fp-shirt", style: { background: color } }, p.pos, p.rating != null ? /* @__PURE__ */ h("span", { className: cx("spv-rating", "is-" + (p.rating >= 9 ? "elite" : p.rating >= 7 ? "good" : p.rating >= 5 ? "ok" : "poor"), "spv-fp-rating") }, p.rating.toFixed(1)) : null, /* @__PURE__ */ h("span", { className: "spv-fp-badges" }, Array.from({ length: p.goals || 0 }).map((_, k) => /* @__PURE__ */ h("span", { key: "g" + k, className: "spv-fp-badge" }, /* @__PURE__ */ h(EventIcon, { name: "goal", size: 12, color: "currentColor" }))), p.assists ? /* @__PURE__ */ h("span", { className: "spv-fp-badge" }, /* @__PURE__ */ h(Glyph, { name: "boot", size: 12, filled: !0 })) : null, p.yellow ? /* @__PURE__ */ h("span", { className: "spv-fp-badge" }, /* @__PURE__ */ h(EventIcon, { name: "yellow-card", size: 12 })) : null, p.red ? /* @__PURE__ */ h("span", { className: "spv-fp-badge" }, /* @__PURE__ */ h(EventIcon, { name: "red-card", size: 12 })) : null, p.subOff ? /* @__PURE__ */ h("span", { className: "spv-fp-badge is-off" }, /* @__PURE__ */ h(EventIcon, { name: "substitution", size: 12, color: "currentColor" })) : null)), /* @__PURE__ */ h("span", { className: "spv-fp-name" }, p.name, p.subOff ? " " + p.subOff + "\u2032" : ""))));
  }
  function MatchLiveActivity(props) {
    let m = props.match || {}, p = m.prediction, hc = clubColor(m.home, "#4C86F5"), ac = clubColor(m.away, "#FFB020");
    return /* @__PURE__ */ h("div", { className: "spv-la-stage", "data-theme": "dark" }, /* @__PURE__ */ h("div", { className: "spv-island", "aria-label": "Dynamic Island, compact" }, /* @__PURE__ */ h("span", { className: "spv-island-side" }, /* @__PURE__ */ h(LogoImage, { crest: m.home.crest, size: 20 }), /* @__PURE__ */ h("b", null, m.homeScore)), /* @__PURE__ */ h("span", { className: "spv-live" }, m.minute, "\u2032"), /* @__PURE__ */ h("span", { className: "spv-island-side" }, /* @__PURE__ */ h("b", null, m.awayScore), /* @__PURE__ */ h(LogoImage, { crest: m.away.crest, size: 20 }))), /* @__PURE__ */ h("div", { className: "spv-island is-expanded", "aria-label": "Dynamic Island, expanded" }, /* @__PURE__ */ h("div", { className: "spv-la-row" }, /* @__PURE__ */ h("span", { className: "spv-la-club" }, /* @__PURE__ */ h(LogoImage, { crest: m.home.crest, size: 32 }), /* @__PURE__ */ h("span", null, m.home.name)), /* @__PURE__ */ h("span", { className: "spv-la-mid" }, /* @__PURE__ */ h("span", { className: "spv-la-score" }, m.homeScore, " - ", m.awayScore), /* @__PURE__ */ h("span", { className: "spv-live" }, m.minute, "\u2032")), /* @__PURE__ */ h("span", { className: "spv-la-club" }, /* @__PURE__ */ h(LogoImage, { crest: m.away.crest, size: 32 }), /* @__PURE__ */ h("span", null, m.away.name)))), /* @__PURE__ */ h("div", { className: "spv-la", "aria-label": "Lock Screen" }, /* @__PURE__ */ h("div", { className: "spv-la-row" }, /* @__PURE__ */ h("span", { className: "spv-la-club" }, /* @__PURE__ */ h(LogoImage, { crest: m.home.crest, size: 36 }), /* @__PURE__ */ h("span", null, m.home.name)), /* @__PURE__ */ h("span", { className: "spv-la-mid" }, /* @__PURE__ */ h("span", { className: "spv-la-score" }, m.homeScore, " - ", m.awayScore), /* @__PURE__ */ h("span", { className: "spv-live" }, m.minute, "\u2032")), /* @__PURE__ */ h("span", { className: "spv-la-club" }, /* @__PURE__ */ h(LogoImage, { crest: m.away.crest, size: 36 }), /* @__PURE__ */ h("span", null, m.away.name))), p ? /* @__PURE__ */ h("div", { className: "spv-la-pred" }, /* @__PURE__ */ h("span", { className: "spv-pred-bar" }, /* @__PURE__ */ h("span", { style: { flex: p.home, background: hc } }), /* @__PURE__ */ h("span", { style: { flex: p.draw, background: "rgba(255,255,255,0.28)" } }), /* @__PURE__ */ h("span", { style: { flex: p.away, background: ac } })), /* @__PURE__ */ h("span", { className: "spv-la-pred-labels" }, /* @__PURE__ */ h("b", null, p.home, "%"), /* @__PURE__ */ h("span", null, "Draw ", p.draw, "%"), /* @__PURE__ */ h("b", null, p.away, "%"))) : null));
  }

  // src2/social.jsx
  function ReactionButton(props) {
    let set = !!props.reaction;
    return /* @__PURE__ */ h("button", { type: "button", className: cx("spv-act", "spv-press", set && "is-set"), onClick: props.onPress, "aria-pressed": set, "aria-label": set ? "Your reaction " + props.reaction + ", " + (props.count || 0) + " reactions" : "React, " + (props.count || 0) + " reactions" }, set && props.reaction !== "\u2764\uFE0F" ? /* @__PURE__ */ h("span", { className: "spv-emoji is-lg" }, props.reaction) : /* @__PURE__ */ h(Glyph, { name: "heart", size: 22, filled: set }), props.count ? /* @__PURE__ */ h("span", null, props.count) : null);
  }
  function ReactionChips(props) {
    let entries = props.entries || [], max = props.max || 5, shown = entries.slice(0, max), hidden = entries.length - shown.length;
    return /* @__PURE__ */ h("div", { className: cx("spv-rchips", props.className) }, shown.map((e) => {
      let mine = e.emoji === props.userReaction;
      return /* @__PURE__ */ h("button", { key: e.emoji, type: "button", className: cx("spv-rchip", "spv-press", mine && "is-mine"), "aria-pressed": mine, onClick: () => props.onReact && props.onReact(e.emoji), "aria-label": e.emoji + " " + e.count + (mine ? ", yours" : "") }, /* @__PURE__ */ h("span", { className: "spv-emoji" }, e.emoji), /* @__PURE__ */ h("span", null, e.count));
    }), hidden > 0 ? /* @__PURE__ */ h("button", { type: "button", className: "spv-rchip spv-press", "aria-label": hidden + " more reactions" }, "+", hidden) : null);
  }
  function ScoreStrip(props) {
    let d = props.score, hl = props.highlight;
    return /* @__PURE__ */ h("span", { className: cx("spv-strip", props.big && "is-big") }, /* @__PURE__ */ h("span", { className: cx("spv-strip-name is-home", hl === "away" && "spv-muted", hl === "home" && "is-strong") }, d.home.name), /* @__PURE__ */ h(LogoImage, { crest: d.home.crest, size: props.big ? 28 : 20 }), /* @__PURE__ */ h("span", { className: "spv-strip-score" }, d.homeScore, " - ", d.awayScore), /* @__PURE__ */ h(LogoImage, { crest: d.away.crest, size: props.big ? 28 : 20 }), /* @__PURE__ */ h("span", { className: cx("spv-strip-name", hl === "home" && "spv-muted", hl === "away" && "is-strong") }, d.away.name));
  }
  function FeedItemCard(props) {
    let it = props.item || {};
    return /* @__PURE__ */ h("article", { className: cx("spv-card", "spv-feed", props.className) }, /* @__PURE__ */ h("header", { className: "spv-feed-head" }, /* @__PURE__ */ h("span", { className: "spv-feed-head-left" }, /* @__PURE__ */ h(EventIcon, { name: it.event || "whistle", size: 16 }), /* @__PURE__ */ h("b", null, it.label), /* @__PURE__ */ h("span", { className: "spv-muted" }, [it.minute != null ? it.minute + "\u2032" : null, it.competition].filter(Boolean).join(" \xB7 "))), /* @__PURE__ */ h("span", { className: "spv-muted" }, it.timeAgo)), it.headline ? /* @__PURE__ */ h("span", { className: "spv-feed-text" }, /* @__PURE__ */ h("span", { className: "spv-t-subtitle" }, it.headline), it.detail ? /* @__PURE__ */ h("span", { className: "spv-muted" }, it.detail) : null) : null, it.score ? /* @__PURE__ */ h(ScoreStrip, { score: it.score, highlight: it.highlight, big: it.big }) : null, /* @__PURE__ */ h("div", { className: "spv-feed-actions" }, /* @__PURE__ */ h(ReactionButton, { reaction: it.userReaction, count: it.likeCount }), /* @__PURE__ */ h("button", { type: "button", className: "spv-act spv-press", "aria-label": "Comments, " + (it.commentCount || 0) }, /* @__PURE__ */ h(Glyph, { name: "chat", size: 22 }), it.commentCount ? /* @__PURE__ */ h("span", null, it.commentCount) : null), /* @__PURE__ */ h("span", { style: { flex: 1 } }), /* @__PURE__ */ h("button", { type: "button", className: "spv-act spv-press", "aria-label": "Share" }, /* @__PURE__ */ h(Glyph, { name: "send", size: 22 }))), it.reactions && it.reactions.length ? /* @__PURE__ */ h(ReactionChips, { entries: it.reactions, userReaction: it.userReaction }) : null, it.latestComment || it.latestLiker ? /* @__PURE__ */ h("span", { className: "spv-feed-preview" }, it.latestComment ? /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("b", null, it.latestComment.name), " ", it.latestComment.text) : null, it.latestLiker ? /* @__PURE__ */ h("span", { className: "spv-muted" }, it.latestLiker.name, it.likeCount > 1 ? " and " + (it.likeCount - 1) + " others reacted" : " reacted", it.commentCount > 1 ? " \xB7 View all " + it.commentCount + " comments" : "") : null) : null);
  }
  function LeagueStandings(props) {
    let rows = props.rows || [], zones = props.zones || {}, [view, setView] = React.useState("table"), tone = (z) => "var(--zone-" + z + ")";
    return /* @__PURE__ */ h("div", { className: cx("spv-standings", props.className) }, props.projected ? /* @__PURE__ */ h(ToggleButton, { label: "Standings view", options: [{ value: "table", label: "Table" }, { value: "projected", label: "Projected" }], value: view, onChange: setView }) : null, /* @__PURE__ */ h("div", { className: "spv-card spv-st" }, /* @__PURE__ */ h("table", { className: "spv-st-table", "aria-label": props.label || "League table" }, /* @__PURE__ */ h("thead", null, /* @__PURE__ */ h("tr", null, /* @__PURE__ */ h("th", { scope: "col", className: "is-rank" }, "#"), /* @__PURE__ */ h("th", { scope: "col", className: "is-club" }, "Club"), /* @__PURE__ */ h("th", { scope: "col" }, "P"), /* @__PURE__ */ h("th", { scope: "col" }, "W"), /* @__PURE__ */ h("th", { scope: "col" }, "D"), /* @__PURE__ */ h("th", { scope: "col" }, "L"), /* @__PURE__ */ h("th", { scope: "col", className: "is-pts" }, "Pts"))), /* @__PURE__ */ h("tbody", null, rows.map((r, i) => /* @__PURE__ */ h("tr", { key: r.name, className: cx(r.highlight && "is-highlight") }, /* @__PURE__ */ h("td", { className: "is-rank" }, r.zone ? /* @__PURE__ */ h("span", { className: "spv-st-zone", style: { background: tone(r.zone) }, "aria-label": zones[r.zone], role: "img" }) : null, r.rank || i + 1), /* @__PURE__ */ h("td", { className: "is-club" }, /* @__PURE__ */ h("span", { className: "spv-st-club" }, /* @__PURE__ */ h(LogoImage, { crest: r.crest, size: 20 }), /* @__PURE__ */ h("span", { className: "spv-st-name" }, r.name), r.live ? /* @__PURE__ */ h("span", { className: "spv-live-dot", role: "img", "aria-label": "Playing now" }) : null)), /* @__PURE__ */ h("td", null, r.played), /* @__PURE__ */ h("td", null, r.won), /* @__PURE__ */ h("td", null, r.drawn), /* @__PURE__ */ h("td", null, r.lost), /* @__PURE__ */ h("td", { className: "is-pts" }, r.points)))))), Object.keys(zones).length ? /* @__PURE__ */ h("div", { className: "spv-st-legend" }, Object.keys(zones).map((z) => /* @__PURE__ */ h("span", { key: z }, /* @__PURE__ */ h("i", { style: { background: tone(z) } }), zones[z]))) : null);
  }

  // src2/launch.jsx
  var LAUNCH_TIMELINE = { hold: 200, wind: 600, inhale: 700, melt: 900, round: 1220, crouch: 1160, release: 1320, opened: 2e3, done: 2100 }, LAUNCH_SHADER = LIQUID_SHADER, T = LAUNCH_TIMELINE, W_END = TURN * 4 / (T.release - T.hold), TAU = 230;
  function spinAt(t) {
    return t <= T.release ? TURN * E.windUp(span(t, T.hold, T.release)) : TURN + W_END * TAU * (1 - Math.exp(-(t - T.release) / TAU));
  }
  function makeStars(n, seed) {
    let r = rng(seed);
    return Array.from({ length: n }, (_, i) => {
      let z = r(), dust = i >= 22;
      return dust ? { dust, a: r() * TURN, r: 0.13 + r() * 0.3, z, s: 0.45 + z * 0.55, o: 0.25 + z * 0.4, tw: r() * TURN, d: r() * 160 } : { dust, a: r() * TURN, r: 0.22 + Math.sqrt(r()) * 0.88, z, s: 0.55 + z * 0.9, o: 0.3 + z * 0.55, tw: r() * TURN, d: r() * 160 };
    });
  }
  var DROPS2 = [
    { tip: 0, off: -0.15, dist: 290, size: 9, lag: 0 },
    { tip: 0, off: 0.14, dist: 360, size: 6.5, lag: 30 },
    { tip: 0, off: 0.36, dist: 240, size: 10.5, lag: 60 },
    { tip: Math.PI, off: -0.12, dist: 310, size: 8.5, lag: 12 },
    { tip: Math.PI, off: 0.16, dist: 370, size: 6, lag: 45 },
    { tip: Math.PI, off: 0.4, dist: 250, size: 10, lag: 75 }
  ];
  function frameAt(t, extra, W, H, markSize, stars) {
    let u = blank(W, H), R = Math.hypot(W, H) / 2, size = 1 - 0.08 * E.inOut(span(t, T.inhale, T.melt + 100)), spin = spinAt(t), omega = (spin - spinAt(t - 8)) / 8, rc0 = 0.3 * markSize * size, crouch = rc0 * (1 - 0.2 * E.inOut(span(t, T.crouch, T.release))), outer = (tt) => tt <= T.release ? crouch : crouch + E.spread(span(tt, T.release, T.opened)) * (R + 120 - crouch), starPos = (st, tt) => {
      if (!st.dust) return [Math.cos(st.a) * st.r * R, Math.sin(st.a) * st.r * R, st.r * R];
      let fall = E.fall(span(tt, T.wind + st.z * 120, T.round)), rn = st.r * (1 - 0.96 * fall), a = st.a - 12e-5 * (tt + extra) / Math.pow(st.r, 1.5) - 0.5 * spinAt(tt) / (rn + 0.35);
      return [Math.cos(a) * rn * R, Math.sin(a) * rn * R, rn * R];
    };
    stars.forEach((st, i) => {
      let p = starPos(st, t), q = starPos(st, t - 14), tw = 0.82 + 0.18 * Math.sin((t + extra) / 380 + st.tw), vis = E.out(span(t + extra, 40 + st.d, 520 + st.d)) * (st.dust ? clamp((p[2] - rc0 * 0.9) / (rc0 * 1.4)) : 1);
      u.uStar.set([p[0], p[1], q[0], q[1]], i * 4), u.uStarB.set([st.s, st.dust && t >= T.release ? 0 : st.o * tw * vis], i * 2);
    }), DROPS2.forEach((d, i) => {
      let t0 = T.release + 20 + d.lag;
      if (t < t0 || t > t0 + 600) return;
      let a = -spinAt(t0) + d.tip + d.off, dir = a - 0.55, r0 = outer(t0) * 1.1 - d.size * 0.4, go = E.out(span(t, t0, t0 + 600)) * d.dist, rad = d.size * (0.3 + 0.7 * E.out(span(t, t0, t0 + 110))) * (1 - 0.3 * span(t, t0, t0 + 600));
      u.uDrop.set([Math.cos(a) * r0 + Math.cos(dir) * go, Math.sin(a) * r0 + Math.sin(dir) * go, rad, 1], i * 4);
    }), u.uBg = 1, u.uK = markSize / 758 * size, u.uSpin = spin, u.uBlur = Math.min(0.42, Math.max(0, omega * 20)), u.uTwist = 1.5 * E.inOut(span(t, T.wind, T.round));
    let pulled = E.fall(span(t, T.melt, T.round)), melting = t < T.round;
    return u.uMorph = melting ? 0 : 1, u.uGrow = melting ? 1 - pulled : 1, u.uGk = 0.16 * markSize, u.uRc = melting ? pulled > 0 ? outer(t) * Math.sqrt(pulled) : -10 : outer(t), u.uRot = spin, u.uAmp = 0.12 * E.out(span(t, T.release, T.release + 170)) * (1 - E.inOut(span(t, T.release + 120, T.opened + 60))), u.uInner = t > T.release + 70 ? Math.max(0, outer(t - 70) - lerp(44, 22, span(t, T.release, T.opened))) : 0, u.uDk = lerp(26, 6, E.inOut(span(t, T.release + 20, T.release + 180))), u.uLight = 0.075 * E.out(span(t + extra, 0, 700)) * (1 - E.inOut(span(t, T.melt, T.release))), u;
  }
  function LaunchScreen(props) {
    let W = props.width || 300, H = props.height || 650, markSize = props.markSize || 100, fx = React.useRef(null), app = React.useRef(null), stars = React.useMemo(() => makeStars(NSTAR, 11), []), frozen = typeof props.at == "number", ready = React.useRef(!0);
    ready.current = props.ready !== !1;
    let gpu = React.useRef(void 0);
    return React.useEffect(() => () => {
      gpu.current && gpu.current.dispose();
    }, []), React.useLayoutEffect(() => {
      let cv = fx.current, painter = makePainter(cv, W, H, frozen, gpu), still = !frozen && (stillMotion() || !painter.gpu), draw = (t, waited2) => {
        let over = t >= T.done;
        if (cv.style.display = over ? "none" : "", still) {
          t === 0 && painter.paint(frameAt(0, 0, W, H, markSize, stars), "#060B1E"), cv.style.opacity = String(1 - span(t, 300, 600));
          return;
        }
        over || painter.paint(frameAt(t, waited2 || 0, W, H, markSize, stars), "#060B1E");
        let a = E.out(span(t, T.release + 60, T.done + 250));
        app.current.style.transform = "translateY(" + (12 * (1 - a)).toFixed(2) + "px) scale(" + (1.035 - 0.035 * a).toFixed(4) + ")";
      };
      if (frozen) {
        draw(props.at, 0);
        return;
      }
      let raf, t0 = null, waited = 0, end = still ? 600 : T.done, tick = (now) => {
        t0 == null && (t0 = now);
        let t = now - t0 - waited;
        !ready.current && t > T.hold && (waited += t - T.hold, t = T.hold), draw(Math.min(t, end), waited), t < end ? raf = requestAnimationFrame(tick) : props.onDone && props.onDone();
      };
      return draw(0, 0), raf = requestAnimationFrame(tick), () => cancelAnimationFrame(raf);
    }, [props.play, props.at]), /* @__PURE__ */ h("div", { className: cx("spv-launch", props.className), style: { width: W, height: H, ...props.style || {} }, role: "img", "aria-label": "Sportiverse" }, /* @__PURE__ */ h("div", { className: "spv-launch-app", ref: app }, props.children), /* @__PURE__ */ h("canvas", { ref: fx, className: "spv-launch-fx", style: { width: W, height: H }, "aria-hidden": "true" }));
  }

  // src2/liquid.jsx
  function useGpu() {
    let gpu = React.useRef(void 0);
    return React.useEffect(() => () => {
      gpu.current && gpu.current.dispose();
    }, []), gpu;
  }
  function makeOrbit(n, seed) {
    let r = rng(seed);
    return Array.from({ length: n }, () => {
      let z = r();
      return { a: r() * TURN, r: 0.42 + Math.sqrt(r()) * 0.58, s: 0.5 + z * 0.8, o: 0.25 + z * 0.5, tw: r() * TURN };
    });
  }
  var LIQUID_MARK_TIMELINE = { melt: 340, crouch: 300, release: 440, gather: 900, reform: 1360, done: 2e3 }, LIQUID_FORM_TIMELINE = { converge: 760, grow: 180, reform: 700, done: 1450 }, B = LIQUID_MARK_TIMELINE, F2 = LIQUID_FORM_TIMELINE, FLING = [
    { tip: 0, off: -0.2, dist: 0.62, size: 0.085, lag: 0 },
    { tip: 0, off: 0.12, dist: 0.85, size: 0.06, lag: 30 },
    { tip: 0, off: 0.4, dist: 0.5, size: 0.1, lag: 60 },
    { tip: Math.PI, off: -0.15, dist: 0.68, size: 0.08, lag: 15 },
    { tip: Math.PI, off: 0.16, dist: 0.88, size: 0.055, lag: 45 },
    { tip: Math.PI, off: 0.42, dist: 0.52, size: 0.095, lag: 75 }
  ];
  function markFrame(o) {
    let { t, tau, ftau, hv, extraSpin, size, S, midnight, stars } = o, u = blank(S, S);
    u.uBg = midnight ? 1 : 0, u.uLight = midnight ? 0.06 : 0;
    let rc0 = 0.3 * size, spin = t * 12e-5 + extraSpin, twist = 0.3 * Math.sin(t / 2600) + 0.85 * hv, k = size / 758 * (1 + 0.012 * Math.sin(t / 1900)) * (1 - 0.05 * hv), grow = 1, rc = rc0, amp = 0, dk = 0.25 * size;
    if (tau != null) {
      spin += TURN * 0.6 * E.inOut(span(tau, 0, B.done));
      let pulled = E.fall(span(tau, 0, B.melt + 100)), thrown = THROW(span(tau, B.reform, B.done));
      grow = tau < B.reform ? 1 - pulled : thrown;
      let crouch = 1 - 0.18 * E.inOut(span(tau, B.crouch, B.release)) * (1 - E.out(span(tau, B.release, B.release + 220))), swell = 0.3 * E.out(span(tau, B.release, B.release + 300)) * (1 - E.inOut(span(tau, B.gather, B.reform + 150)));
      rc = rc0 * (crouch + swell) * Math.sqrt(Math.max(0, 1 - grow)), amp = 0.2 * E.out(span(tau, B.release, B.release + 160)) * (1 - E.inOut(span(tau, B.release + 200, B.reform))), dk = tau < B.gather ? lerp(0.28, 0.06, E.inOut(span(tau, B.release + 20, B.release + 180))) * size : lerp(0.06, 0.3, E.inOut(span(tau, B.gather, B.reform))) * size, FLING.forEach((d, i) => {
        let t0 = B.release + 10 + d.lag;
        if (tau < t0 || tau > B.reform + 200) return;
        let a = -spin + d.tip + d.off, dir = a - 0.55, r0 = rc0 * 1.15, go = E.out(span(tau, t0, t0 + 480)) * d.dist * size, back = E.inOut(span(tau, B.gather + d.lag, B.reform + d.lag * 0.5)), x = (Math.cos(a) * r0 + Math.cos(dir) * go) * (1 - back), y = (Math.sin(a) * r0 + Math.sin(dir) * go) * (1 - back), rad = d.size * size * (0.3 + 0.7 * E.out(span(tau, t0, t0 + 110)));
        u.uDrop.set([x, y, rad, 1], i * 4);
      });
    }
    if (ftau != null && ftau < F2.done) {
      let thrown = THROW(span(ftau, F2.reform, F2.done));
      grow = thrown, rc = rc0 * E.out(span(ftau, F2.grow, F2.reform + 120)) * Math.sqrt(Math.max(0, 1 - thrown)), spin -= 1.35 * (1 - E.out(span(ftau, F2.reform - 260, F2.done))), dk = 0.26 * size, FLING.forEach((d, i) => {
        let w = E.inOut(span(ftau, d.lag * 2, F2.converge + d.lag)), rr = size * (1.2 + d.dist * 0.3) * (1 - w), a = i / FLING.length * TURN + 0.4 - 1.1 * w, rad = d.size * size * 1.1 * (0.2 + 0.8 * E.out(span(ftau, d.lag * 2, d.lag * 2 + 200)));
        w < 1 && u.uDrop.set([Math.cos(a) * rr, Math.sin(a) * rr, rad, 1], i * 4);
      });
    }
    return midnight && stars && stars.forEach((st, i) => {
      let x = Math.cos(st.a) * st.r * S * 0.5, y = Math.sin(st.a) * st.r * S * 0.5;
      u.uStar.set([x, y, x, y], i * 4), u.uStarB.set([st.s, st.o * (0.8 + 0.2 * Math.sin(t / 420 + st.tw)) * E.out(span(t, 0, 900))], i * 2);
    }), u.uK = k, u.uSpin = spin, u.uRot = spin, u.uTwist = twist, u.uMorph = 0, u.uGrow = grow, u.uGk = 0.16 * size, u.uRc = grow >= 0.999 ? -10 : rc, u.uAmp = amp, u.uDk = dk, u;
  }
  function LiquidMark(props) {
    let size = props.size || 120, S = Math.round(size * (props.room || 3)), midnight = props.background === "midnight", interactive = props.interactive !== !1, frozen = typeof props.at == "number", fx = React.useRef(null), gpu = useGpu(), hover = React.useRef(0), burstReq = React.useRef(!1), stars = React.useMemo(() => midnight && props.stars !== !1 ? makeOrbit(28, 5) : null, [midnight, props.stars]);
    React.useLayoutEffect(() => {
      let cv = fx.current, painter = makePainter(cv, S, S, frozen, gpu), still = !frozen && (stillMotion() || !painter.gpu), base = { size, S, midnight, stars, hv: 0, extraSpin: 0 };
      if (frozen || still) {
        let phase = props.phase || "burst";
        painter.paint(markFrame({ ...base, t: 0, tau: frozen && phase === "burst" ? props.at : null, ftau: frozen && phase === "form" ? props.at : null }));
        return;
      }
      let raf, t0 = null, last = null, hv = 0, extraSpin = 0, burst = null, lastEnd = 0, visible = !0, intro = props.intro ? 0 : null, io = typeof IntersectionObserver != "undefined" ? new IntersectionObserver((es) => {
        visible = es[0].isIntersecting;
      }) : null;
      io && io.observe(cv);
      let tick = (now) => {
        raf = requestAnimationFrame(tick), t0 == null && (t0 = now, last = now);
        let dt = Math.min(50, now - last);
        last = now;
        let t = now - t0;
        if (!visible) return;
        let before = hv;
        hv += (hover.current - hv) * (1 - Math.exp(-dt / 220)), hv < before && (extraSpin += 0.85 * (before - hv)), extraSpin += hv * 16e-4 * dt;
        let ftau = intro != null && t < F2.done ? t : null;
        ftau == null && burst == null && (burstReq.current || props.loop && t - lastEnd > props.loop) && (burst = t, burstReq.current = !1);
        let tau = burst != null ? t - burst : null;
        tau != null && tau > B.done && (burst = null, tau = null, lastEnd = t), painter.paint(markFrame({ ...base, t, tau, ftau, hv, extraSpin }));
      };
      return raf = requestAnimationFrame(tick), () => {
        cancelAnimationFrame(raf), io && io.disconnect();
      };
    }, [props.at, props.phase, size, midnight, props.intro, props.loop]);
    let handlers = interactive && !frozen ? {
      onPointerEnter: () => {
        hover.current = 1;
      },
      onPointerLeave: () => {
        hover.current = 0;
      },
      onClick: () => {
        burstReq.current = !0;
      }
    } : {};
    return /* @__PURE__ */ h("div", { className: cx("spv-liquid-mark", interactive && "is-interactive", props.className), style: { width: S, height: S, ...props.style || {} }, role: "img", "aria-label": props.label || "Sportiverse", ...handlers }, /* @__PURE__ */ h("canvas", { ref: fx, style: { width: S, height: S }, "aria-hidden": "true" }));
  }
  var LIQUID_REVEAL_TIMELINE = { crouch: 140, release: 240, opened: 960, done: 1060 }, RV = LIQUID_REVEAL_TIMELINE;
  function hexRgb(hex) {
    let v = parseInt(hex.slice(1), 16);
    return [(v >> 16 & 255) / 255, (v >> 8 & 255) / 255, (v & 255) / 255];
  }
  function revealFrame(t, W, H, origin, cover, drops) {
    let u = blank(W, H);
    cover && cover[0] === "#" && (u.uCover = hexRgb(cover));
    let O = [origin.x * W, origin.y * H], R = Math.max(Math.hypot(O[0], O[1]), Math.hypot(W - O[0], O[1]), Math.hypot(O[0], H - O[1]), Math.hypot(W - O[0], H - O[1])), m = Math.min(W, H), rc0 = 0.03 * m + 6, spin = TURN * 0.32 * E.out(span(t, 0, 1300)), crouch = rc0 * E.out(span(t, 0, 180)) * (1 - 0.2 * E.inOut(span(t, RV.crouch, RV.release))), outer = (tt) => tt <= RV.release ? crouch : rc0 * 0.8 + E.spread(span(tt, RV.release, RV.opened)) * (R + 0.12 * m + 40);
    return u.uCenter = O, u.uBg = cover === "none" ? 0 : 1, u.uMorph = 1, u.uRc = t <= 0 ? -10 : outer(t), u.uRot = spin, u.uAmp = 0.12 * E.out(span(t, RV.release, RV.release + 160)) * (1 - E.inOut(span(t, RV.release + 120, RV.opened))), u.uInner = t > RV.release + 60 ? Math.max(0, outer(t - 60) - lerp(0.06 * m + 10, 0.03 * m + 8, span(t, RV.release, RV.opened))) : 0, u.uDk = lerp(0.07 * m, 0.016 * m, E.inOut(span(t, RV.release + 20, RV.release + 180))), drops && FLING.forEach((d, i) => {
      let t0 = RV.release + 10 + d.lag * 0.8;
      if (t < t0 || t > t0 + 560) return;
      let a = -spin + d.tip + d.off, dir = a - 0.55, r0 = outer(t0) * 1.1, go = E.out(span(t, t0, t0 + 560)) * (0.35 + d.dist * 0.45) * R, rad = (d.size * 0.24 * m + 2) * (0.3 + 0.7 * E.out(span(t, t0, t0 + 110))) * (1 - 0.3 * span(t, t0, t0 + 560));
      u.uDrop.set([Math.cos(a) * r0 + Math.cos(dir) * go, Math.sin(a) * r0 + Math.sin(dir) * go, rad, 1], i * 4);
    }), u;
  }
  function LiquidReveal(props) {
    let W = props.width || 640, H = props.height || 360, origin = props.origin || { x: 0.5, y: 0.5 }, cover = props.cover || "midnight", drops = props.drops !== !1, frozen = typeof props.at == "number", fx = React.useRef(null), content = React.useRef(null), gpu = useGpu();
    return React.useLayoutEffect(() => {
      let cv = fx.current, painter = makePainter(cv, W, H, frozen, gpu), still = !frozen && (stillMotion() || !painter.gpu), settle = (t) => {
        if (cover === "none" || !content.current) return;
        let a = E.out(span(t, RV.release + 40, RV.done + 200));
        content.current.style.transform = "translateY(" + (8 * (1 - a)).toFixed(2) + "px) scale(" + (1.02 - 0.02 * a).toFixed(4) + ")";
      }, draw = (t) => {
        let over = t >= RV.done;
        if (cv.style.display = over ? "none" : "", still) {
          t === 0 && cover !== "none" && painter.paint(revealFrame(0, W, H, origin, cover, !1), cover[0] === "#" ? cover : "#060B1E"), cv.style.opacity = String(1 - span(t, 0, 300)), settle(RV.done + 200);
          return;
        }
        over || painter.paint(revealFrame(t, W, H, origin, cover, drops)), settle(t);
      };
      if (frozen) {
        draw(props.at);
        return;
      }
      let raf, t0 = null, started = !props.whenVisible, delay = props.delay || 0, end = still ? 300 : RV.done + 200, io = props.whenVisible && typeof IntersectionObserver != "undefined" ? new IntersectionObserver((es) => {
        es[0].isIntersecting && (started = !0);
      }, { threshold: 0.4 }) : null;
      io && io.observe(cv);
      let tick = (now) => {
        if (!started) {
          raf = requestAnimationFrame(tick);
          return;
        }
        t0 == null && (t0 = now + delay);
        let t = Math.max(0, now - t0);
        draw(Math.min(t, end)), t < end ? raf = requestAnimationFrame(tick) : props.onDone && props.onDone();
      };
      return cv.style.display = "", cv.style.opacity = "1", cover !== "none" ? painter.paint(revealFrame(0, W, H, origin, cover, !1)) : painter.paint(blank(W, H)), settle(0), raf = requestAnimationFrame(tick), () => {
        cancelAnimationFrame(raf), io && io.disconnect();
      };
    }, [props.play, props.at, W, H, origin.x, origin.y, cover]), /* @__PURE__ */ h("div", { className: cx("spv-liquid-reveal", props.className), style: { width: W, height: H, ...props.style || {} } }, /* @__PURE__ */ h("div", { className: "spv-liquid-reveal-content", ref: content }, props.children), /* @__PURE__ */ h("canvas", { ref: fx, className: "spv-liquid-reveal-fx", style: { width: W, height: H }, "aria-hidden": "true" }));
  }

  // src2/index.jsx
  window.Sportiverse = {
    Logo,
    Icon,
    EventIcon,
    Glyph,
    Scene,
    LaunchScreen,
    LiquidMark,
    LiquidReveal,
    Button,
    IconButton,
    Chip,
    ToggleButton,
    Switch,
    Input,
    Card,
    SectionHeader,
    ListRow,
    Badge,
    UnreadDot,
    Skeleton,
    EmptyState,
    LogoImage,
    ProfileAvatar,
    DetailHeader,
    DetailTabs,
    TabBar,
    PlayerMatchRating,
    StatBar,
    ResultsRow,
    CharacteristicsRadar,
    Flag,
    LiveTimer,
    PredictionBar,
    MatchListItem,
    MatchCompetitionSection,
    MatchDetailHeader,
    MatchEventItem,
    MomentumChart,
    WinProbabilityChart,
    FormationDisplay,
    MatchLiveActivity,
    FeedItemCard,
    ReactionChips,
    ReactionButton,
    LeagueStandings,
    Replay,
    useTick,
    useCount,
    launchTimeline: LAUNCH_TIMELINE,
    launchShader: LAUNCH_SHADER,
    liquidTimelines: { mark: LIQUID_MARK_TIMELINE, form: LIQUID_FORM_TIMELINE, reveal: LIQUID_REVEAL_TIMELINE },
    liquidEase: E,
    iconNames: ICON_NAMES,
    glyphNames: GLYPH_NAMES,
    eventNames: EVENT_NAMES,
    crestNames: Object.keys(CRESTS)
  };
})();
