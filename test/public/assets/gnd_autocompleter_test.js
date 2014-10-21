// Make jQuery and PrototypeJS get along
jQuery.noConflict();

// mockData_ holds the fake AJAX data.  Its structure is
//   mockData_[fd_id][partial || full || suggest][user text]
// The "fd_id" is just an identifier put in the URL to distinguish between the
// different fields.
mockData_ = {
  '1284': { // fe_search_cne
    'partial': {
      'ar' : '[65,["5398","2910","154","4077","1051","4836","5529"],{"term_icd9_code":["042","518.82","704.01","","284.9","424.1","322.9"]},[["AIDS-related complex"],["Adult respiratory distress syndrome (ARDS)"],["Alopecia areata"],["Androblastoma"],["Anemia - refractory"],["Aortic insufficiency"],["Arachnoiditis"]],false]',
      'pickw' : '[1,["1848"],{"term_icd9_code":["278.8"]},[["Pickwickian syndrome"]],false]'
     },
    'full' : {
      'ar' :'[65,["5398","2910","154","4077","1051","4836","5529","3406","2119","3140","386","486","2713","1461","4716","615","5692","1610","2266","5652","945","5754","1446","1613","5060","5795","246","2125","5361","1171","4087","685","2709","4631","3040","4347","2636","5448","419","4804","371","3150","4778","5010","1322","4787","86","2232","3922","3052","4271","3971","3537","1087","34","106","204","4521","4477","2898","5545","5860","5868","4977","4656"],{"term_icd9_code":["042","518.82","704.01","","284.9","424.1","322.9","887.2","729.5","427.9","440.9","447.0","","747.60","","","","098.50","696.0","711.90","","","427.5","V45.01","433.10","","414.9","290.40","379.91","446.5","","35.20","","812.20","719.40","714.30","692.4","584.9","","","","403.90","747.0","","","099.3","440.1","799.1","","362.31","390","714.0","959.2","427.9","473.8","","446.7","446.5","524.60","414.00","274.0","","","","427.9"]},[["AIDS-related complex"],["Adult respiratory distress syndrome (ARDS)"],["Alopecia areata"],["Androblastoma"],["Anemia - refractory"],["Aortic insufficiency"],["Arachnoiditis"],["Arm amputation"],["Arm pain"],["Arrhythmia"],["Arteriosclerosis"],["Arteriovenous (AV) fistula"],["Arteriovenous fistula surgery"],["Arteriovenous malformation (AVM)"],["Arteriovenous shunt"],["Artery surgery"],["Arthritis"],["Arthritis - gonococcal"],["Arthritis - psoriatic"],["Arthritis - septic"],["Arthrocentesis"],["Arthroscopy"],["Cardiac arrest"],["Cardiac pacemaker"],["Carotid artery disease"],["Coronary artery angioplasty/stenting"],["Coronary artery disease (CAD)"],["Dementia - multi-infarction"],["Eye pain"],["Giant cell arteritis"],["Hand/arm surgery"],["Heart valve - mechanical"],["Hip arthroplasty - total"],["Humerus fracture"],["Joint pain (arthralgia)"],["Juvenile rheumatoid arthritis (JRA)"],["Keratosis - arsenical"],["Kidney failure (short-term renal failure)"],["Knee arthroplasty - total"],["Lyme arthritis"],["Myeloid maturation arrest"],["Nephrosclerosis - arteriolar"],["Patent ductus arteriosus (PDA)"],["Pulmonary artery - large"],["Pulmonary artery hypertension (PAH)"],["Reiter\'s syndrome"],["Renal artery stenosis"],["Respiratory arrest"],["Resuscitation after cardiac arrest"],["Retinal central artery occlusion"],["Rheumatic fever"],["Rheumatoid arthritis (RA)"],["Shoulder or upper arm injury"],["Sinus arrhythmia"],["Sinus tenderness"],["Spermatogenic arrest"],["Takayasu\'s arteritis"],["Temporal arteritis"],["Temporomandibular arthritis"],["Three vessel coronary artery disease"],["Tophus"],["Transposition of the great arteries (TGA)"],["Truncus arteriosus (TA)"],["Urinary sphincter - artificial"],["Ventricular arrhythmia"]],false]'
    }
  },
  '1285': { // fe_search_button_cne
    'partial': {
      'car': '[70,["461","4632","3140","294","5021","1505","5008"],{"term_icd9_code":["199.1","413.9","427.9","35.20","986","680.9","259.2"]},[["Adenosquamous carcinoma"],["Angina pectoris"],["Arrhythmia"],["Bioprosthetic heart valve"],["Carbon monoxide toxicity"],["Carbuncle"],["Carcinoid syndrome"]],false]'
    }
  },
  '2163': { // fe_search_cwe
    'partial': {
      'knee' : '[12,["2809","547","419","1486","4145","2031","4795"],{"term_icd9_code":["897.2","897.0","","","","822.0","719.46"]},[["Above knee amputation (AKA)"],["Below knee amputation (BKA)"],["Knee arthroplasty - total"],["Knee derangement - internal"],["Knee dislocation"],["Knee fracture"],["Knee pain"]],false]',
      'Knee Pain': '[1,["4795"],{"term_icd9_code":["719.46"]},[["Knee pain"]],false]',
      'ab' : '[87,["3982","2296","2167","9853","9706","4316","13006"],{"term_icd9_code":["789.00","682.9","305.00","626.9","522.5","789.06","634.90"]},[["Abdominal pain"],["Abscess"],["Abuse - alcohol"],["Uterine bleeding - abnormal"],["Tooth abscess"],["Epigastric pain"],["Miscarriage"]],false]',
      'ar': '[52,["2212","2958","2189","2319","29959","11458","2311"],{"term_icd9_code":["414.9","729.5","379.91","719.40","959.2","584.9","714.0"]},[["Coronary artery disease (CAD)"],["Arm pain"],["Eye pain"],["Joint pain (arthralgia)"],["Shoulder or upper arm injury"],["Kidney failure (short-term renal failure)"],["Rheumatoid arthritis (RA)"]],false]'
    },
    'full' : {
      'ar' : '[52,["2212","2958","2189","2319","29959","11458","2311","9893","21729","5631","18602","9728","2216","2886","8353","6546","1988","6701","22663","5396","3860","8344","2956","2323","11397","8342","10684","9594","8640","8311","8337","11077","4351","10856","10552","5838","9131","11524","13949","10728","11105","11114","10008","10357","4737","8785","2894","8752","3717","X43","X203","X211"],{"term_icd9_code":["414.9","729.5","379.91","719.40","959.2","584.9","714.0","812.20","704.01","427.5","414.00","433.10","427.9","424.1","696.0","711.90","","714.30","290.40","799.1","440.1","524.60","446.5","099.3","427.9","518.82","274.0","473.8","427.9","098.50","446.7","440.9","447.0","284.9","446.5","747.60","042","403.90","322.9","","","692.4","362.31","","390","","747.0","","","","",""]},[["Coronary artery disease (CAD)"],["Arm pain"],["Eye pain"],["Joint pain (arthralgia)"],["Shoulder or upper arm injury"],["Kidney failure (short-term renal failure)"],["Rheumatoid arthritis (RA)"],["Humerus fracture"],["Alopecia areata"],["Cardiac arrest"],["Three vessel coronary artery disease"],["Carotid artery disease"],["Arrhythmia"],["Aortic insufficiency"],["Arthritis - psoriatic"],["Arthritis - septic"],["Pulmonary artery hypertension (PAH)"],["Juvenile rheumatoid arthritis (JRA)"],["Dementia - multi-infarction"],["Respiratory arrest"],["Renal artery stenosis"],["Temporomandibular arthritis"],["Temporal arteritis"],["Reiter\'s syndrome"],["Sinus arrhythmia"],["Adult respiratory distress syndrome (ARDS)"],["Tophus"],["Sinus tenderness"],["Ventricular arrhythmia"],["Arthritis - gonococcal"],["Takayasu\'s arteritis"],["Arteriosclerosis"],["Arteriovenous (AV) fistula"],["Anemia - refractory"],["Giant cell arteritis"],["Arteriovenous malformation (AVM)"],["AIDS-related complex"],["Nephrosclerosis - arteriolar"],["Arachnoiditis"],["Spermatogenic arrest"],["Myeloid maturation arrest"],["Keratosis - arsenical"],["Retinal central artery occlusion"],["Androblastoma"],["Rheumatic fever"],["Arteriovenous shunt"],["Patent ductus arteriosus (PDA)"],["Lyme arthritis"],["Pulmonary artery - large"],["Arthritis"],["Transposition of the great arteries (TGA)"],["Truncus arteriosus (TA)"]],false]'
    },
    'suggest' : {
      'ar' : '[["2886"],[["Aortic insufficiency"]]]'
    }
  }
};

// Mock the Ajax call.  We are only trying to test the JavaScript side here.
Ajax.Request = function(url, options) {
  var params = options.parameters;
  var resultType = params.autocomp ? 'partial' : params.suggest ? 'suggest' : 'full'
  // This is just for testing, so assume the right parameters.
  var fd_id = url.match(/fd_id=(\d+)/)[1];
  var terms = params.terms || params.field_val; // suggest uses field_val
  var responseText = mockData_[fd_id][resultType][terms];
console.log("%%% responseText = "+responseText);
  if (!responseText) {
    if (params.suggest === '1')
      responseText = '[[],[]]';
    else
      responseText = '[0,[],{},[],false]';
  }

  var response = {};
  response.request = this;
  this.options = options;
  response.status = 200;
  response.responseText = responseText;
  setTimeout(function() {options.onComplete(response);}, 1);
};
// end of mock for Ajax.Request

var opts = {};
opts['matchListValue']=true
opts['codes']=["LA6155-1","LA6156-9","LA6162-7","LA6214-6","LA6266-6","LA4457-3","LA4489-6"]
opts['suggestionMode']=0
opts['autoFill']=true
var fe_race_or_ethnicity_autoComp = new Def.Autocompleter.Prefetch('fe_race_or_ethnicity', ["American Indian or Alaska Native","Asian","Black or African-American","Hispanic or Latino","Native Hawaiian or Pacific Islander","White","Unknown"], opts);
var opts = {};
opts['codes']=["LA44-3","LA45-0","LA46-8"]
opts['suggestionMode']=0
opts['autoFill']=true
var fe_prefetch_cwe_autoComp = new Def.Autocompleter.Prefetch('fe_prefetch_cwe', ["Spanish","French","Other"], opts);
var opts = {};
opts['matchListValue']=true
opts['suggestionMode']=0
opts['autocomp']=true
var fe_search_cne_autoComp =
  new Def.Autocompleter.Search('fe_search_cne',
    '/form/get_search_res_list?fd_id=1284', opts);var opts = {};
opts['matchListValue']=false
opts['suggestionMode']=0
opts['autocomp']=true
var fe_search_cwe_autoComp =
  new Def.Autocompleter.Search('fe_search_cwe',
    '/form/get_search_res_list?fd_id=2163', opts);var opts = {};
opts['matchListValue']=true
opts['codes']=["LA6155-1","LA6156-9","LA6162-7","LA6214-6","LA6266-6","LA4457-3","LA4489-6"]
opts['suggestionMode']=0
opts['autoFill']=true
var fe_table_prefetch_cne_autoComp = new Def.Autocompleter.Prefetch('fe_table_prefetch_cne', ["LA6155-1 - American Indian or Alaska Native","LA6156-9 - Asian","LA6162-7 - Black or African-American","LA6214-6 - Hispanic or Latino","LA6266-6 - Native Hawaiian or Pacific Islander","LA4457-3 - White","LA4489-6 - Unknown"], opts);
var opts = {};
opts['matchListValue']=true
opts['suggestionMode']=0
opts['buttonID']='fe_search_button_cne_button'
opts['autocomp']=true
var fe_search_button_cne_autoComp =
  new Def.Autocompleter.Search('fe_search_button_cne',
    '/form/get_search_res_list?fd_id=1285', opts);var opts = {};
opts['matchListValue']=true
opts['suggestionMode']=0
opts['autocomp']=true
var fe_table_search_cne_autoComp =
  new Def.Autocompleter.Search('fe_table_search_cne',
    '/form/get_search_res_list?fd_id=1286', opts);      Def.dataFieldlabelNames_ = {"race_or_ethnicity":[["A Prefetch CNE autocompleter"],""],"prefetch_cwe":[["A Prefetch CWE autocompleter"],""],"search_cne":[["A search CNE autocompleter"],""],"search_cwe":[["A search CWE autocompleter"],""],"table_prefetch_cne":[["A TablePrefetch autocompleter"],""],"search_button_cne":[["A search CNE autocompleter with a button"],""],"table_search_cne":[["A TableSearch CNE autocompleter with a button"],""]};
      Def.tipFields_ = {"race_or_ethnicity":["race_or_ethnicity"],"prefetch_cwe":["prefetch_cwe"],"search_cne":["search_cne"],"search_cwe":["search_cwe"],"table_prefetch_cne":["table_prefetch_cne"],"search_button_cne":["search_button_cne"],"table_search_cne":["table_search_cne"]};
      Def.Autocompleter.Base.TABLE_FIELD_JOIN_STR = ' - ';
      // The following could be in a global JS file
      window.tip_delay = 50;
      window.access_close = 'C';
      Def.SET_VAL_DELIM = '|';
Def.fieldObservers_={
 'save':{
     'click': [function(event){onSave(this,event);}, function(event) {event.stopPropagation();}]
  }
}
Def.fieldValidations_ = {
}

