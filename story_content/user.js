window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  /* Storyline does not run web objects in Preview. This puts the same 3D page on the slide,
   but only inside Storyline Preview. In the published course (Web, SCORM, Moodle) it does nothing
   and the real web object runs. */
(function () {
  if (location.protocol !== 'file:' || !/\/Articulate\/Storyline\//i.test(location.pathname)) return;
  var s = document.createElement('script');
  s.src = 'file:///C:/Users/VICTUS/Desktop/SIMULATION%20PHASE%20II/3D%20Modeling/BUILDING%20AND%20CONSTRUCTION%20TECHNOLOGY/BDCBD501_Basic%20Reinforced%20Concrete%20Design/v2_LoadPathLab/05_FINAL_LIVE3D/BD5LP_Home/preview_mount.js?v=' + Date.now();
  s.onload = function () { if (window.bdcrc_mountPreview) window.bdcrc_mountPreview('D6jceZvxPE1'); };
  document.head.appendChild(s);
})();
}

window.Script2 = function()
{
  /* Storyline does not run web objects in Preview. This puts the same 3D page on the slide,
   but only inside Storyline Preview. In the published course (Web, SCORM, Moodle) it does nothing
   and the real web object runs. */
(function () {
  if (location.protocol !== 'file:' || !/\/Articulate\/Storyline\//i.test(location.pathname)) return;
  var s = document.createElement('script');
  s.src = 'file:///C:/Users/VICTUS/Desktop/SIMULATION%20PHASE%20II/3D%20Modeling/BUILDING%20AND%20CONSTRUCTION%20TECHNOLOGY/BDCBD501_Basic%20Reinforced%20Concrete%20Design/v2_LoadPathLab/05_FINAL_LIVE3D/BD5LP_S1_Simulation/preview_mount.js?v=' + Date.now();
  s.onload = function () { if (window.bdcrc_mountPreview) window.bdcrc_mountPreview('6AeBzkHLeBG'); };
  document.head.appendChild(s);
})();
}

window.Script3 = function()
{
  /* Storyline does not run web objects in Preview. This puts the same 3D page on the slide,
   but only inside Storyline Preview. In the published course (Web, SCORM, Moodle) it does nothing
   and the real web object runs. */
(function () {
  if (location.protocol !== 'file:' || !/\/Articulate\/Storyline\//i.test(location.pathname)) return;
  var s = document.createElement('script');
  s.src = 'file:///C:/Users/VICTUS/Desktop/SIMULATION%20PHASE%20II/3D%20Modeling/BUILDING%20AND%20CONSTRUCTION%20TECHNOLOGY/BDCBD501_Basic%20Reinforced%20Concrete%20Design/v2_LoadPathLab/05_FINAL_LIVE3D/BD5LP_S2_Simulation/preview_mount.js?v=' + Date.now();
  s.onload = function () { if (window.bdcrc_mountPreview) window.bdcrc_mountPreview('LeBbp71ts4x'); };
  document.head.appendChild(s);
})();
}

window.Script4 = function()
{
  /* Storyline does not run web objects in Preview. This puts the same 3D page on the slide,
   but only inside Storyline Preview. In the published course (Web, SCORM, Moodle) it does nothing
   and the real web object runs. */
(function () {
  if (location.protocol !== 'file:' || !/\/Articulate\/Storyline\//i.test(location.pathname)) return;
  var s = document.createElement('script');
  s.src = 'file:///C:/Users/VICTUS/Desktop/SIMULATION%20PHASE%20II/3D%20Modeling/BUILDING%20AND%20CONSTRUCTION%20TECHNOLOGY/BDCBD501_Basic%20Reinforced%20Concrete%20Design/v2_LoadPathLab/05_FINAL_LIVE3D/BD5LP_S3_Simulation/preview_mount.js?v=' + Date.now();
  s.onload = function () { if (window.bdcrc_mountPreview) window.bdcrc_mountPreview('H1NgTD9SBQK'); };
  document.head.appendChild(s);
})();
}

window.Script5 = function()
{
  /* Storyline does not run web objects in Preview. This puts the same 3D page on the slide,
   but only inside Storyline Preview. In the published course (Web, SCORM, Moodle) it does nothing
   and the real web object runs. */
(function () {
  if (location.protocol !== 'file:' || !/\/Articulate\/Storyline\//i.test(location.pathname)) return;
  var s = document.createElement('script');
  s.src = 'file:///C:/Users/VICTUS/Desktop/SIMULATION%20PHASE%20II/3D%20Modeling/BUILDING%20AND%20CONSTRUCTION%20TECHNOLOGY/BDCBD501_Basic%20Reinforced%20Concrete%20Design/v2_LoadPathLab/05_FINAL_LIVE3D/BD5LP_S4_Simulation/preview_mount.js?v=' + Date.now();
  s.onload = function () { if (window.bdcrc_mountPreview) window.bdcrc_mountPreview('sfenqG45nwU'); };
  document.head.appendChild(s);
})();
}

window.Script6 = function()
{
  /* Storyline does not run web objects in Preview. This puts the same 3D page on the slide,
   but only inside Storyline Preview. In the published course (Web, SCORM, Moodle) it does nothing
   and the real web object runs. */
(function () {
  if (location.protocol !== 'file:' || !/\/Articulate\/Storyline\//i.test(location.pathname)) return;
  var s = document.createElement('script');
  s.src = 'file:///C:/Users/VICTUS/Desktop/SIMULATION%20PHASE%20II/3D%20Modeling/BUILDING%20AND%20CONSTRUCTION%20TECHNOLOGY/BDCBD501_Basic%20Reinforced%20Concrete%20Design/v2_LoadPathLab/05_FINAL_LIVE3D/BD5LP_S5_Simulation/preview_mount.js?v=' + Date.now();
  s.onload = function () { if (window.bdcrc_mountPreview) window.bdcrc_mountPreview('SF6PPw1LaPE'); };
  document.head.appendChild(s);
})();
}

window.Script7 = function()
{
  /* Storyline does not run web objects in Preview. This puts the same 3D page on the slide,
   but only inside Storyline Preview. In the published course (Web, SCORM, Moodle) it does nothing
   and the real web object runs. */
(function () {
  if (location.protocol !== 'file:' || !/\/Articulate\/Storyline\//i.test(location.pathname)) return;
  var s = document.createElement('script');
  s.src = 'file:///C:/Users/VICTUS/Desktop/SIMULATION%20PHASE%20II/3D%20Modeling/BUILDING%20AND%20CONSTRUCTION%20TECHNOLOGY/BDCBD501_Basic%20Reinforced%20Concrete%20Design/v2_LoadPathLab/05_FINAL_LIVE3D/BD5LP_S6_Simulation/preview_mount.js?v=' + Date.now();
  s.onload = function () { if (window.bdcrc_mountPreview) window.bdcrc_mountPreview('J8arNngEMh4'); };
  document.head.appendChild(s);
})();
}

window.Script8 = function()
{
  /* Course complete: show this slide for 4 seconds, then go back to the HOME task list (finished tasks show DONE there). */
setTimeout(function () { try { GetPlayer().SetVar('BB_T1_GoHome', String(Date.now())); } catch (e) {} }, 4000);
}

};
