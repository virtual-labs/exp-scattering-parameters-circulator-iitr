importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"6be650252f2f99b38121d61689a5ee85","url":"contributors.html"},{"revision":"02f46224365e1ae8903c96f5bbce0d9c","url":"details.json"},{"revision":"ce019b0f02244c35fdb1ea377453c8ba","url":"feedback.html"},{"revision":"68b329da9893e34099c7d8ad5cb9c940","url":"images/a.png"},{"revision":"4c1c5c905db55469cc38752007efaab5","url":"images/block1.png"},{"revision":"5d2e860f1f212e300aec838c132ae5b9","url":"images/block2.png"},{"revision":"7f9f4d3291ca42a010da086d49f1587e","url":"images/block3.png"},{"revision":"6530d4a89a35ea97fc59dd2564c0a631","url":"images/circulator.png"},{"revision":"85d3e3c2bb2659ea6b0a2377506ddf9f","url":"images/directionalcoupler.png"},{"revision":"43a62eb4a46af5204e8f91b3497ba949","url":"images/iitb_logo_30dpi.png"},{"revision":"cfedbdd051a26e92b3425aeebfd7c26b","url":"index.html"},{"revision":"bd0b54c22332107b8a781580d3884a85","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"a176891d9fd7131591e471ea31db8abf","url":"posttest.html"},{"revision":"cbe894f590aa81b73c54ed0480908a6c","url":"posttest.json"},{"revision":"df9fa7171482a0ea681fa001834af25d","url":"pretest.html"},{"revision":"6e2149f2ee9ad86af0c46669f4b769a4","url":"pretest.json"},{"revision":"52b1818eeae76f95211716c656c1ef0c","url":"procedure.html"},{"revision":"9d29bc5a919555c4168bd51772e89ff7","url":"references.html"},{"revision":"e14bd14a5803ffe4cf46dba0b5affc56","url":"simulation.html"},{"revision":"864edc8f9dc2426594aba28fbaa24203","url":"simulation/css/task10.css"},{"revision":"0dfd3f9c58ec99e306e3cd980e01b362","url":"simulation/css/task7.css"},{"revision":"cd4ac3aa547f6dc94f4d869c0f189d54","url":"simulation/css/task9.css"},{"revision":"003295954647e30f25fea5a534a4aeb1","url":"simulation/images/attenuator.png"},{"revision":"93f9b1a9cd9367206060bae12fe5ad9c","url":"simulation/images/block4.jpg"},{"revision":"81448497bfaab0ac1b6f52bbe9af43f9","url":"simulation/images/circulator.png"},{"revision":"429cdeb6320f0c7c4a9b2d89559ca4f8","url":"simulation/images/cro.png"},{"revision":"16981dd91604248cd9e3527138533be8","url":"simulation/images/detector.png"},{"revision":"5a91deba7c3ebd0500eef9188cab970b","url":"simulation/images/detector1.png"},{"revision":"4d5b18d1e932225abe1e3198fe37b084","url":"simulation/images/directional.png"},{"revision":"d00709608cb0ec16ed1f64c849f3a567","url":"simulation/images/empty-room-with-white-brick-walls-studio_107791-1349.jpg"},{"revision":"7e5f6864e61977b50af21ac63baa62b4","url":"simulation/images/frequency.png"},{"revision":"fadfc177622d3e6a1fc346f9a70aafc1","url":"simulation/images/GUEST_077f6c4f-f318-48f2-b4cd-05940d284553.jpg"},{"revision":"ba2e49d2fdbba074a6d2669b8d5d5514","url":"simulation/images/image.png"},{"revision":"b34c62f929a2333a0150692a89f25a69","url":"simulation/images/isolator.png"},{"revision":"731ad342119cb8c855f6c7a79dbc8a25","url":"simulation/images/klystron mount.png"},{"revision":"01e6789322cb90155e338788418c1bce","url":"simulation/images/littledot.png"},{"revision":"f2e9cff848ea7a813e109a3d98dc9635","url":"simulation/images/matched.png"},{"revision":"3c936846519012a0163be97f6f9ce845","url":"simulation/images/matchedt.png"},{"revision":"fa2f5902ad656754a2074d846edebec8","url":"simulation/images/matchedt1.png"},{"revision":"8a00f91e8005160d307f9b6b19920c19","url":"simulation/images/output-onlinepngtools (37).png"},{"revision":"31a0389f70bb9deaf843314f1af62fae","url":"simulation/images/output-onlinepngtools (38).png"},{"revision":"a6fb613ad03ffa79774e06c4411a845f","url":"simulation/images/output-onlinepngtools (4).png"},{"revision":"54a66ac2e96eaa0403bc39fe92fdd5ca","url":"simulation/images/output-onlinepngtools (6).png"},{"revision":"26e7a3562ad96b63be246255e17bdeac","url":"simulation/images/SharedScreenshot.jpg"},{"revision":"508d1f4d0531744786831a05b4ad623f","url":"simulation/images/slotted-line.png"},{"revision":"c3fa114e5d4a24779f8b7755c236897d","url":"simulation/images/stand.png"},{"revision":"53f8386df6c330eceb198963692a604f","url":"simulation/images/table.png"},{"revision":"fcca0c209edc3f5b79b0109063428966","url":"simulation/index.html"},{"revision":"11d14a8a5ef905d2a39eea73ec4240ef","url":"simulation/js/demo.js"},{"revision":"7fa1bb8435adfa48b83a91dd313eb999","url":"simulation/js/demo1.js"},{"revision":"a63c1b8cb16c6611bc35e9375834df40","url":"simulation/js/demo2.js"},{"revision":"87d9fb1c78f8fd88d2c93a32e5097bac","url":"simulation/js/demo3.js"},{"revision":"8a4434fbca241afd5683c54a934d5a1c","url":"simulation/js/jogDial.js"},{"revision":"d889460ca06c22dc4af7a638bd94b73d","url":"simulation/js/jogDial2.js"},{"revision":"74cfed0f028890f2f1d9103a3aa2d7af","url":"simulation/js/jogDial3.js"},{"revision":"fd255415839568e52a48da5de5af244c","url":"simulation/js/jquery-ui.min.js"},{"revision":"397754ba49e9e0cf4e7c190da78dda05","url":"simulation/js/jquery.min.js"},{"revision":"de2a03f7c358bac31c706ebc72b752fd","url":"simulation/js/jsplumb1.js"},{"revision":"16651b549a485484401ca12c06fa001b","url":"simulation/js/knockout-2.2.1.js"},{"revision":"8ea6bb038a11aa68f2a83ed888052934","url":"simulation/js/sevenSeg.js"},{"revision":"0b42e6695d2138e84c3f711a0d5293e6","url":"simulation/task10.html"},{"revision":"e1cfa7e0e6d05dd86e67756dfac24979","url":"simulation/task9.html"},{"revision":"cb4876e9c3d93c06e23a46fd151bc74f","url":"theory.html"},{"revision":"d03881bbd46f4462fbf9eebc074063e9","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );