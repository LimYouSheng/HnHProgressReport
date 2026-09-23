'use strict';
const SOURCE_TITLES = ['Hoarding of Site','Hoarding of Site','Cutting fence for access','Laying of protection of access','Cutting up of turf','Cutting up of turf','Removal of existing turf','Removal of existing turf','Disposal of Turf','Disposal of Turf','Compaction of base','Levelling of base','Levelling of Base','Compaction of base','Patching of Base','Installation of Turf and Shockpad','Installation of Turf and Shockpad','Installation of Turf and Shockpad','Installation of Turf and Shockpad','Joining of turf','Joining of turf','Joining of turf','Installation of Gamelines','Installation of Gamelines','Installation of Gamelines','Installation of Gamelines','Installation of Gamelines','Infilling of Sand','Brushing of Sand Infill','Infilling of PU coated Rubber','Brushing of Rubber Infill','Completed','Completed','Installation of Water Tap Points','Installation of Water Tap Points','Making good of accessway'];
const STAGES = ['Site preparation','Turf removal','Base preparation','Turf & shockpad','Joining & gamelines','Infill & finishing','Water points & reinstatement','General progress'];
const SOURCE_STAGE = n => n<=4?STAGES[0]:n<=10?STAGES[1]:n<=15?STAGES[2]:n<=19?STAGES[3]:n<=27?STAGES[4]:n<=33?STAGES[5]:STAGES[6];
const SAMPLE_CAPTIONS = [
 'Site hoarding is shown along the existing field perimeter.',
 'Hoarding of the site is documented from the running-track side of the field.',
 'An access opening is shown in the existing perimeter fence.',
 'Protection is laid along the access route beside the school building.',
 'The existing turf is being cut into sections for removal.',
 'Cutting of the existing turf is documented across the field.',
 'Sections of the existing turf have been rolled up for removal.',
 'Removed turf rolls are arranged on the exposed field base.',
 'Removed turf rolls are stacked in the collection area for disposal.',
 'Loading and disposal of the removed turf is documented at the site access.',
 'Compaction of the exposed field base is documented with a roller on site.',
 'Levelling of the field base is documented during the preparation works.',
 'Base levelling works are shown across the field.',
 'Compaction of the prepared base is shown along the field edge.',
 'Localised patching of the base is documented before turf installation.',
 'Turf and shockpad installation is shown along the field perimeter.',
 'Turf is being laid over the shockpad in the documented work area.',
 'An overview records the turf and shockpad installation across the field.',
 'Turf and shockpad installation is documented from the ground-level work area.',
 'Joining of adjacent turf sections is documented along the prepared seam.',
 'Turf joining works are documented during the evening work session.',
 'A closer view records joining work along an adjacent turf seam.',
 'Installation of the gamelines is documented on the field.',
 'Gameline installation is shown across the turf surface.',
 'The gameline installation is documented with the markings laid out on the field.',
 'An overview records installation of the gamelines across the playing area.',
 'An elevated view documents the installed gameline layout.',
 'Sand infilling is documented across the turf surface.',
 'Brushing of the sand infill is documented with equipment on the field.',
 'Infilling of PU coated rubber is documented with the spreading equipment on site.',
 'Brushing of the rubber infill is documented across the playing surface.',
 'The supplied report labels this overview of the field as completed.',
 'The supplied report labels this additional overview of the field as completed.',
 'Installation of water tap points is documented beside the field perimeter.',
 'A second view records installation of the water tap points beside the field.',
 'Making good of the accessway is documented alongside the school building.'
];
const ASSET = {logo:'assets/logo.jpg',icon:'icons/icon-192.png',photos:Object.fromEntries(SOURCE_TITLES.map((_,i)=>[i+1,`assets/photos/${String(i+1).padStart(2,'0')}.jpg`]))};
function localISO(date=new Date()){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
function shiftDate(days,base=localISO()){const d=new Date(`${base}T12:00:00`);d.setDate(d.getDate()+days);return localISO(d);}
function makeSeed(){
 const today=localISO(), before=n=>shiftDate(-n,today), after=n=>shiftDate(n,today);
 const supervisors=[{id:'s1',name:'Daniel Tan',email:'daniel@example.test',phone:'+65 8000 0001',active:true},{id:'s2',name:'Amir Rahman',email:'amir@example.test',phone:'+65 8000 0002',active:true},{id:'s3',name:'Wei Ming',email:'weiming@example.test',phone:'+65 8000 0003',active:true},{id:'s4',name:'Ravi Kumar',email:'ravi@example.test',phone:'+65 8000 0004',active:true}];
 const projects=[
 {id:'p1',code:'HH-026-001',name:'St Anthony’s Canossian Primary School',client:'St Anthony’s Canossian Primary School',location:'School field · Singapore',category:'Synthetic turf replacement',start:before(42),end:after(18),status:'Active',assigned:['s1','s2'],description:'Replacement of the existing school-field turf. Document site hoarding and access protection, removal and disposal of the existing turf, base preparation, installation of turf and shockpad, turf joining and gamelines, sand and rubber infill, water tap points, and reinstatement of the accessway.',aiInstructions:'Keep captions factual and concise. Name the work stage and visible activity. Do not infer quantities, percentages, quality, safety compliance or payment entitlement. Flag uncertainty for owner review.',cadence:'weekdays',interval:2,weekday:5,time:'17:00',minimum:4,hero:32,created:before(42)},
 {id:'p2',code:'HH-026-002',name:'Community Sports Court',client:'Community Facilities',location:'East district · Singapore',category:'Court resurfacing',start:before(9),end:after(25),status:'Active',assigned:['s1','s3'],description:'Renewal of the community sports court, including surface preparation, resurfacing and court markings.',aiInstructions:'Identify the selected work stage. Do not state that work has passed inspection or is complete without owner confirmation.',cadence:'daily',interval:1,weekday:5,time:'16:30',minimum:3,hero:null,created:before(9)},
 {id:'p3',code:'HH-026-003',name:'Landscape Improvement Works',client:'Landscape Facilities',location:'North district · Singapore',category:'Landscape works',start:before(4),end:after(34),status:'Active',assigned:['s4'],description:'Landscape improvement works, including site preparation, ground works and reinstatement.',aiInstructions:'Use concise, neutral captions. Request clarification when the work stage is uncertain.',cadence:'weekly',interval:7,weekday:3,time:'15:00',minimum:3,hero:null,created:before(4)}];
 const photos=SOURCE_TITLES.map((title,i)=>{const n=i+1;return {id:`ph${n}`,project:'p1',supervisor:i%2?'s2':'s1',source:n,src:ASSET.photos[n],fileName:`SACPS-photo-${String(n).padStart(2,'0')}.jpg`,stage:SOURCE_STAGE(n),title,note:title,date:before(Math.floor((35-i)/3)),uploadedAt:`${before(Math.floor((35-i)/3))}T${i%2?'15:42':'10:25'}:00`,status:n<=20?'approved':n<=32?'review':'queued',caption:n<=32?SAMPLE_CAPTIONS[i]:'',approvedBy:n<=20?'Owner':null,approvedAt:n<=20?`${before(1)}T16:00:00`:null,revision:1};});
 const notifications=[{id:'n1',project:'p1',to:'s1',text:'Please upload today’s site-progress photos. Include the turf joints and a wide field view.',created:`${today}T08:00:00`,read:false,fulfilled:false,kind:'prompt',minimum:4},{id:'n2',project:'p2',to:'s1',text:'Initial site photos are due for the Community Sports Court. Please submit at least 3 photos.',created:`${today}T08:10:00`,read:false,fulfilled:false,kind:'prompt',minimum:3}];
 const activity=[{id:'a1',project:'p1',who:'Amir Rahman',text:'submitted photos for owner review.',at:`${today}T08:12:00`},{id:'a2',project:'p1',who:'Owner',text:'approved 20 photo captions for the progress report.',at:`${before(1)}T16:05:00`},{id:'a3',project:'p1',who:'Owner',text:'updated the project reporting schedule.',at:`${before(1)}T14:32:00`}];
 const report=(id,reference,records,exported)=>({id,project:'p1',projectName:projects[0].name,code:projects[0].code,category:projects[0].category,client:projects[0].client,reference,summary:'Photographic record of the work stages documented during the reporting period.',from:records[0].date,to:records.at(-1).date,exported,photos:structuredClone(records),excluded:0});
 const reports=[report('r-seed-01','Progress report 01',photos.slice(0,12),`${before(6)}T16:30:00`),report('r-seed-02','Progress report 02',photos.slice(12,20),`${before(3)}T17:15:00`)];
 return {schema:2,today,supervisors,projects,photos,notifications,reports,activity};
}
