(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('澧县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"430723","properties":{"name":"澧县","cp":[111.758702,29.633236],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@A@C@A@@A@@AA@AAE@GCA@A@EAIAEAC@C@CBIBA@MDE@C@CBC@AAE@AAA@A@A@AA@@A@A@A@A@A@E@CACACACCCCCAACAECHEJCHEHGHON@BEDCHAB@B@BBFDDDD@@BBFBFBDBDDDB@DAB@BAF@@AB@@A@C@A@A@@@GBGFEDAFAD@H@BAFADABABCBABEBCBEF@@ADADCJCLADCB@@A@CA@@AAAAC@A@AA@@@A@A@AB@@BD@@@B@@@@A@A@A@@@@CC@E@A@@@@BIDCBEDABADAFABAB@@AB@BA@@@@@D@F@@@B@@BA@@@ABE@@BAB@BA@@@@@A@@@A@A@@@@AA@@AA@A@A@A@A@@@@A@@@A@@@A@@A@C@AA@@AA@@BA@@B@DBB@BA@AD@@A@A@@@A@@@@BB@@BB@@@CFA@@@A@@@A@A@@@@BB@BB@@@@@BCDABA@CBE@ABABGFAFAFADAHMPCFEFCBA@@BIJEHCDABGBCBA@@DABAD@BBB@FDJBB@B@@@BBB@BBBB@BBB@F@B@B@B@F@FAD@FBFBBDBB@@@B@B@HBDBDDFBBDD@B@DBD@BADCD@@@B@B@D@@@BBB@@@B@@@B@@BB@BBF@B@B@BAB@@CBABAB@@AB@BBB@BA@@BCBA@ABABAB@B@@@BB@@@B@@@B@BABAB@B@@@@@BB@@@B@BA@ABAB@B@@@BBD@@@B@@@BA@@FABAD@@@B@BB@DDFDFBB@FBB@D@B@D@BAB@BA@AB@BBB@DDB@BB@@B@BBBBFDBBBD@B@BABADADAD@@@DAB@BAB@B@B@@BB@@D@B@@BBBBD@B@B@BA@A@AB@B@BAH@HBH@BABABABCBABABADADABA@EBA@A@AACA@@AAABA@ABA@C@A@AA@C@A@@AAA@C@C@@@A@AAA@@AAC@AAA@EAA@AAA@A@AAA@CAA@A@AAA@A@AAA@CAA@A@AAA@AAA@A@AAAAC@AAAA@AAC@A@A@CAA@A@AAC@AA@AFCDCBA@AAEAECGAC@CAE@A@@@A@ABAA@@AAECE@A@C@ABA@AB@AA@AAAAA@AAC@A@A@@@AAA@A@C@@@ABA@A@@@AAAAA@AA@M@K@G@GAE@CCECEGA@EIAAAA@@@CAA@@@A@@AAAAA@AAEACAA@@AAA@A@A@C@C@AAC@CAC@CAC@CACACACACEGCC@AAA@@IMEGCC@@MQAAMWACGMEKAKC@C@CBCACAC@ECG@AAC@E@EDA@C@A@A@C@AACCAACCCAEBC@CBCD@@ABAB@D@@BBBB@BAB@B@BBB@B@BADADADAB@BADABAB@B@BAB@D@B@BCDAD@D@FBB@BBDBBB@DABBB@BDBD@D@DAD@@CDA@EDC@EBC@A@@DCBC@GAAAA@CAC@AB@@@@A@ADADAD@DAB@B@BADEFCB@@A@AAACG@CBCBCD@DBFBBDFBB@FBFBDBDBB@D@DADCAOGAAECMICAAA@@CAA@CAA@C@IA@@C@E@IDCDABA@CBAB@@ED@BEDGLGLABCDCB@DBBDBBAB@B@@@@B@B@BBBB@D@BBBD@D@BBBDBDADAF@DCDABAFCFCDABAB@B@D@BBBDBD@B@@DDDDBB@D@DCDA@ABEBCBCBC@CDABADADADEBA@A@@@C@CACB@DBBBBBD@BAD@B@DBD@BBBDB@BDFDDBB@P@B@D@FAF@D@D@D@J@BUCBJNDDD@BBBCBA@EBCBEBCBEBABAD@BBD@DADBDBD@DBHDFDDB@@@@@DAFBB@B@@B@B@BB@@HA@@BB@@BA@DB@BBHI@C@EBC@EB@@ABC@AAA@@@EBABCB@BCBA@GBCAE@E@CACBC@CACE@@CAECAACACAAAAACAAA@C@CBABA@ABA@@@A@@ACCAACAAC@C@CAC@CBEBABCBA@AAA@@@A@AAC@@@A@@@CACAAAC@@@ABC@E@C@CBC@ABCB@@@BC@AAA@A@ABABC@AB@@BB@B@BABC@C@AD@B@F@BCDCDCBCB@@@@@BCBABCBEBABCBA@AB@BA@CD@@CBC@E@CAGC@AC@CCAAC@CBC@C@@@AA@A@C@C@AACAA@AAC@C@A@A@CBC@@@E@A@CAC@AACAECACAEACC@@A@@@C@A@A@A@AAEABEDA@CACA@A@@B@DB@CH@@A@AAA@@@@BA@ADABA@@@B@@D@BA@AA@BABA@ABCAADCH@DAB@BAHADADC@C@C@CAC@CACCCACAECCAA@CAA@@AC@AACACAA@CAEA@@CCA@C@@BABBB@B@F@F@HAFEDCBC@CBABADADADABABABCDCDAD@B@@B@@@@F@FCBADCBE@C@E@EAEAG@I@C@G@IBK@C@AD@@@BDFDFHFLHBD@B@DAD@@@D@BBBBBBB@BDF@DAHCFCF@BEDCDABCHAHCBCBEDCDCD@@ABEBCCEBA@@HAD@BCBA@CA@AECAEKIGCK@GBCDGJCFEDABKFA@ABADCB@@AB@@@B@D@@@B@D@D@FBD@FABEFCFABAD@B@FBDBBBHCHCH@DAF@DAF@FAHABCBABABAB@BBB@@BBB@B@DBB@D@D@B@F@F@F@H@DAB@D@D@DAFBFF@@HDF@D@BAB@DAB@FBD@DBJBJFBD@@FBB@B@B@@@@ABABAB@BABAB@B@B@DAB@DBBA@@F@FBBB@BBBDDFDFBFBFBFBF@DBDBBB@BFDB@D@@@@AB@DCDAB@@@@@B@@BB@@B@BBBADBD@B@@@BB@@@D@@@B@B@B@B@B@@A@@B@@@B@@@B@BBB@DBBBB@@@BBB@B@F@B@@@B@@@@A@@@@BA@@@A@AB@@@B@B@@@B@BA@@BB@AB@@@@A@A@@@A@@@AACAC@@@@AA@@@AAAAA@A@@@A@@@A@@BA@@D@B@@BB@DBDBDB@@B@@A@@AE@A@AA@AAAAAAAAAC@C@A@@BABCBADCBABABADAB@DAB@BAB@B@B@B@B@BAB@@@BBD@FB@BB@@@B@@@B@DBB@B@BBB@BB@BB@@BBBDDBDDBB@BBDBDBFDBB@@B@@@BAFEB@FCD@DAD@B@BB@BBB@@BDF@DAD@B@DABCDCHCFA@AB@F@D@B@D@DBD@FBFD@@BBDBD@FBDAD@B@DBB@BBDBD@DBB@D@F@D@DADC@CBE@@DEBABA@@BADE@C@A@ABCDAFA@BD@B@DA@@BABABA@CBCBCD@@ADBDBB@@BB@@BB@@@@@@@@@B@@@B@@@@@@@@@B@@B@@@@@AB@@@@@@@@@@@B@@@@@@@B@@B@@@@@@@A@@@@B@@@@@@@@B@@B@@A@@@@@@@@@@@@B@BAB@@@@@B@@@@@@@@@@@B@@@@@@@@@B@@@@A@@@@@@B@@@@@@@@@@A@@B@@B@@@@@@BA@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@BB@@@@@@@@@@@B@@@@@@B@@@@@@@B@@@@@@@@B@@@@BA@@@@@@@@B@BB@@@@@B@@@@B@@@@@@@@@@A@@B@@@@@@@@@B@@A@@@@@@@@@@B@@@@@BA@@@@@A@@@@A@@A@@@@B@@@@@@@@@@@@@B@@BB@@@@@@@B@@@@@B@@@@@@@@@B@@A@@@@BC@@@@@@B@@@B@@@@A@@B@@@@@@@BA@@@@@@@@B@@BB@@@B@@@B@@@@@@@B@@@@@@@B@@@@@@@@@@@B@@@@BB@@AB@@@B@B@@@@@B@@@B@@B@@B@@B@@@@B@@@B@B@@@BA@@@@BB@@B@@@@AB@@@@@@@B@@@@@@@BB@@@@@@@@@B@@@@@@@@@@@@@B@@@@B@@B@@@@@@@@B@B@@@@@@@@@B@@@@@@@B@@@@@@@@A@@@@@@@@B@@B@@@A@@@@@@BA@@@BB@@@B@@@@@@B@@@@@BB@@@@@@@BA@@B@@AB@@@B@@@B@@@BA@@B@BB@B@@@@BAB@@@BABB@@B@B@B@@@@B@@@@B@@A@@B@@@BA@@D@B@@@B@@A@A@A@@@@AA@@@@@@B@BA@@B@D@@ABB@A@BB@@@@AB@@@B@@@@@BA@@B@B@@@B@@B@@@@B@@A@BB@B@B@@@@BB@@@@BB@@@@A@@B@AA@@B@@AB@@BBA@@B@@@@@@BB@@@B@B@B@@A@@@@B@@@@@@@@AB@B@B@@AB@BB@@BA@@@B@@B@@@@@B@@@@BDA@@@@@B@@BB@@B@@B@@@@B@@BB@B@@@BA@@@@A@@A@@@@B@B@@@B@B@@B@@B@@@B@@@BA@B@@@@@@@@@@@@B@@@@BB@@@BB@@B@@@B@@@@@B@@B@@@@@B@B@@BA@@@@@B@@@BB@@@@BA@@@@B@@@@A@@@@@@BB@@@@BB@B@B@@@@@B@@@@AB@@B@@BB@@@@@@@@@BBA@@@@@B@@@@BBB@@@@@B@@@@B@@@AB@B@@A@@B@@B@@@BBBB@@@@B@@@@B@@@@B@@@@B@@@@@BB@@@@A@@B@@@@BB@@@@@@AB@@@B@@@@@@B@@@@@@@@B@@@@@@@BAB@@@@@@B@@@BB@@@B@@@@@@@@@B@@@@@@@@B@@@@@@@@BB@@A@@@@@@@@@@@A@@B@@B@@@@@B@@@@B@@@@@@B@@@@@@@@@@B@@@@@@@@BB@@@@@@AB@@@@@@@@B@@B@@@@B@@B@@@@@B@@A@@@@BB@@A@@@@@@@@@@BB@@@@@@@B@@A@@@@@@B@@@@@BA@@@@B@@@@@@@B@@@@BB@@@@@@BB@@@@@@@@A@A@@@@@@@@BB@@@@@@@@@@@B@@@@@@B@@A@@@@B@@@B@@@@B@@@@@@@B@@B@@@@@@@@AB@@@@@@A@@B@@@B@B@@@@@BB@@B@B@@@BA@@B@@BB@@@@@@@@AB@@@B@@@@@@AB@@@@@@@B@@@@@@@@@@A@@@@@@BB@@B@@@@@@@BA@@@@@@B@@@@@@@@@@@@@@AB@@@@@@AB@@@@@@@B@@@@@@@B@@@@@@@@BB@@A@@@@@@B@@A@@@@B@@@@@@@@@B@@@@@@@B@@@@@@A@@B@@@@@@@@@@@@AB@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@B@@A@@@@@@@@B@@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@@@BB@@@@B@@@@@@@@@@A@@@@@@B@@@B@@@BABAFABADABADAD@D@@@F@@@B@D@BA@@DABA@@BA@@@A@C@A@AAA@A@@BAB@JCB@DADABAB@B@@@B@@@B@@BD@B@BA@G@E@CAAAA@C@CD@B@@@DDB@BBB@D@B@D@BA@@FAJGBADA@@BCDCBCDE@@@AFCB@B@B@B@HBDBB@@@B@HBB@@D@DBD@@B@B@@CAC@CB@@@B@BA@@B@BAB@@@B@B@@@@@@@BB@@BA@@B@@@B@@AB@B@@@B@@@B@@@@@@@B@@@@@B@@AB@@@@@B@B@@@B@@@B@B@B@BA@@BAB@B@D@BAB@@@@@B@@@@@B@@@@@@ABABADGBGBA@AB@D@BABA@@@@BCDAFAFABAB@B@D@DBBBB@DBFBB@DBB@H@F@B@D@B@BABABA@A@A@AAAAAAACC@@AACCCCACAAAA@@AC@C@ABA@C@@BCBC@EBA@@@C@CAA@ABADBB@@@BAFABADAD@FAB@D@BAD@B@@@@@BDBBDBF@D@B@BEHQ@@@@BABAB@F@D@@ABABAFADBDBBA@@DADCFCHCLEBADADGB@D@BAD@D@DAD@@@DABABCB@@ABC@ABA@@@@@AB@@A@@@A@A@CBA@A@C@ACEACAAAAAACC@AACB@@A@CBC@ABCAE@EAEEGGKAAAE@@AC@A@E@@@A@@@A@@@@A@CA@AAA@A@C@AB@BAB@BBB@B@@@@@@A@AAAA@A@@AAA@@BABAB@@@@@BABA@@@ABC@A@ABA@A@CBC@C@C@ABCFABADGBI@IBG@G@GBA@ADCFEDEBGBG@A@ECCACCCAC@G@A@E@CCEAC@C@@AI@A@A@G@@BCDIBEBC@A@I@C@AAGEIAEEIACEK@GBCDILMFEBABARILGFAB@DA@ABA@A@AAA@E@A@AACCACCEAAAAAAAAA@AAC@@AC@CAC@@@A"],"encodeOffsets":[[114751,30173]]}}],"UTF8Encoding":true});}));