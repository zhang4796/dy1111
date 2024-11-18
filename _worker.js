
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

//节点链接 + 订阅链接
let MainData = `
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:39016#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%201
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:39016#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%202
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:39016#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%203
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:39016#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%204
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:32823#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%205
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:32823#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%206
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:11223#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%207
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:11223#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%208
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:45057#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%20%209
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:45057#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%20%2010
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:23817#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%20%2011
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:23817#%5B%E9%A6%99%E6%B8%AF%5D%20Hong%20Kong%20%2012
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:17145#%5B%E5%8F%B0%E6%B9%BE%5D%20Taiwan%201
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:17145#%5B%E5%8F%B0%E6%B9%BE%5D%20Taiwan%202
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:13292#%5B%E5%8F%B0%E6%B9%BE%5D%20Taiwan%203
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:13292#%5B%E5%8F%B0%E6%B9%BE%5D%20Taiwan%204
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:28304#%5B%E5%8F%B0%E6%B9%BE%5D%20Taiwan%205
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:28304#%5B%E5%8F%B0%E6%B9%BE%5D%20Taiwan%206
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:13621#%5B%E6%97%A5%E6%9C%AC%5D%20Japan%201
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:13621#%5B%E6%97%A5%E6%9C%AC%5D%20Japan%202
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:12695#%5B%E6%97%A5%E6%9C%AC%5D%20Japan%203
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:12695#%5B%E6%97%A5%E6%9C%AC%5D%20Japan%204
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:45166#%5B%E6%97%A5%E6%9C%AC%5D%20Japan%205
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:48651#%5B%E6%97%A5%E6%9C%AC%5D%20Japan%206
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:49625#%5B%E6%96%B0%E5%8A%A0%E5%9D%A1%5D%20Singapore%201
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:49625#%5B%E6%96%B0%E5%8A%A0%E5%9D%A1%5D%20Singapore%202
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:37587#%5B%E6%96%B0%E5%8A%A0%E5%9D%A1%5D%20Singapore%203
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:37587#%5B%E6%96%B0%E5%8A%A0%E5%9D%A1%5D%20Singapore%204
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:33697#%5B%E7%BE%8E%E5%9B%BD%5D%20United%20States%201
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:33697#%5B%E7%BE%8E%E5%9B%BD%5D%20United%20States%202
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:33697#%5B%E7%BE%8E%E5%9B%BD%5D%20United%20States%204
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:14289#%5B%E7%BE%8E%E5%9B%BD%5D%20United%20States%205
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:39407#%5B%E7%BE%8E%E5%9B%BD%5D%20United%20States%206
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:13948#%E5%AE%98%E7%BD%91%20starlinkcloud.me
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:13948#%E5%AE%98%E7%BD%91%20starlinkcloud.top
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:15098#%5B%E8%8B%B1%E5%9B%BD%5D%20United%20Kiongdom
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:19919#%5B%E8%8B%B1%E5%9B%BD%5D%20United%20Kiongdom%202
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:47092#%5B%E5%BE%B7%E5%9B%BD%5D%20Deutschland%201
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:11558#%5B%E5%BE%B7%E5%9B%BD%5D%20Deutschland%202
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:39506#%5B%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%5D%20Malaysia%201
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:39506#%5B%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%5D%20Malaysia%202
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:37117#%5B%E6%9F%AC%E5%9F%94%E5%AF%A8%5D%20Cambodia
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:45073#%5B%E8%B6%8A%E5%8D%97%5D%20Vietnam
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:10302#%5B%E8%B6%8A%E5%8D%97%5D%20Vietnam%202
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:21758#%5B%E5%8D%B0%E5%BA%A6%5D%20India
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:21176#%5B%E6%B3%B0%E5%9B%BD%5D%20Thailand
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:39114#%5B%E5%AD%9F%E5%8A%A0%E6%8B%89%5D%20Bangladesh
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@js.sf1.pw:23374#%5B%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%5D%20Pakistan
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:30276#%5B%E9%9F%A9%E5%9B%BD%5D%20South%20Korea
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:40833#%5B%E8%8F%B2%E5%BE%8B%E5%AE%BE%5D%20Philippines
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:20135#%5B%E5%8D%B0%E5%BA%A6%E5%B0%BC%E8%A5%BF%E4%BA%9A%5D%20Indonesia
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:30191#%5B%E5%9C%9F%E8%80%B3%E5%85%B6%5D%20Turkey
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:29031#%5B%E9%98%BF%E6%A0%B9%E5%BB%B7%5D%20Argentina
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTpmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTA=@sz.sf1.pw:47356#%5B%E4%BF%84%E7%BD%97%E6%96%AF%5D%20Russia
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlvpppnmuK9dIOebtOi/niAxIiwNCiAgImFkZCI6ICJjZjEuZ28tcmVsYXkudG9wIiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiZmZiNTNhNjYtMGY1Yy00M2YzLWEyN2UtYmIzMWI2YWUxZTkwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJjZjEuZ28tcmVsYXkudG9wIiwNCiAgInBhdGgiOiAiL3dzP2VkPTI1NjAiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlvpppnmuK9dIOebtOi/niAyIiwNCiAgImFkZCI6ICJjZjIuZ28tcmVsYXkudG9wIiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiZmZiNTNhNjYtMGY1Yy00M2YzLWEyN2UtYmIzMWI2YWUxZTkwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJjZjEuZ28tcmVsYXkudG9wIiwNCiAgInBhdGgiOiAiL3dzP2VkPTI1NjAiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlvmlrDliqDlnaFdIOebtOi/niAxIiwNCiAgImFkZCI6ICJzZzEuZ28tcmVsYXkudG9wIiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiZmZiNTNhNjYtMGY1Yy00M2YzLWEyN2UtYmIzMWI2YWUxZTkwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJzZzEuZ28tcmVsYXkudG9wIiwNCiAgInBhdGgiOiAiL3dzP2VkPTI1NjAiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlvmlrDliqDlnaFdIOebtOi/niAyIiwNCiAgImFkZCI6ICJzZzMuZ28tcmVsYXkudG9wIiwNCiAgInBvcnQiOiAiODAiLA0KICAiaWQiOiAiZmZiNTNhNjYtMGY1Yy00M2YzLWEyN2UtYmIzMWI2YWUxZTkwIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJzZzMuZ28tcmVsYXkudG9wIiwNCiAgInBhdGgiOiAiL3dzP2VkPTI1NjAiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlvnvo7lm71dIOebtOi/niAxIiwNCiAgImFkZCI6ICJ1cy5nby1yZWxheS50b3AiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTAiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInVzMS5nby1yZWxheS50b3AiLA0KICAicGF0aCI6ICIvd3M/ZWQ9MjU2MCIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlvnvo7lm71dIOebtOi/niAyIiwNCiAgImFkZCI6ICJ1cy5nby1yZWxheS50b3AiLA0KICAicG9ydCI6ICI4MCIsDQogICJpZCI6ICJmZmI1M2E2Ni0wZjVjLTQzZjMtYTI3ZS1iYjMxYjZhZTFlOTAiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInVzMi5nby1yZWxheS50b3AiLA0KICAicGF0aCI6ICIvd3M/ZWQ9MjU2MCIsDQogICJ0bHMiOiAiIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==

`

let urls = [];
let subconverter = "SUBAPI.fxxk.dedyn.io"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG = env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			if (env.URL302) return Response.redirect(env.URL302, 302);
			else if (env.URL) return await proxyURL(env.URL, url);
			else return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			} else if (userAgent.includes('quantumult%20x') || (url.searchParams.has('quanx') && !userAgent.includes('subconverter'))){
				订阅格式 = 'quanx';
			} else if (userAgent.includes('loon') || (url.searchParams.has('loon') && !userAgent.includes('subconverter'))){
				订阅格式 = 'loon';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')) 追加UA = 'clash';
			else if(url.searchParams.has('singbox')) 追加UA = 'singbox';
			else if(url.searchParams.has('surge')) 追加UA = 'surge';
			else if(url.searchParams.has('quanx')) 追加UA = 'Quantumult%20X';
			else if(url.searchParams.has('loon')) 追加UA = 'Loon';
			
			const 请求订阅响应内容 = await getSUB(urls ,request ,追加UA, userAgentHeader);
			console.log(请求订阅响应内容);
			req_data += 请求订阅响应内容[0].join('\n');
			订阅转换URL += "|" + 请求订阅响应内容[1];

			if(env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			//const text = String.fromCharCode.apply(null, encodedData);
			const utf8Decoder = new TextDecoder();
			const text = utf8Decoder.decode(encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);
			
			let base64Data;
			try {
				base64Data = btoa(result);
			} catch (e) {
				function encodeBase64(data) {
					const binary = new TextEncoder().encode(data);
					let base64 = '';
					const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
				
					for (let i = 0; i < binary.length; i += 3) {
						const byte1 = binary[i];
						const byte2 = binary[i + 1] || 0;
						const byte3 = binary[i + 2] || 0;
				
						base64 += chars[byte1 >> 2];
						base64 += chars[((byte1 & 3) << 4) | (byte2 >> 4)];
						base64 += chars[((byte2 & 15) << 2) | (byte3 >> 6)];
						base64 += chars[byte3 & 63];
					}
				
					const padding = 3 - (binary.length % 3 || 3);
					return base64.slice(0, base64.length - padding) + '=='.slice(0, padding);
				}
				
				base64Data = encodeBase64(result);
			}

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'quanx'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=quanx&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&udp=true`;
			} else if (订阅格式 == 'loon'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=loon&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false`;
			}
			//console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');	// 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
	
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
	
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}

async function proxyURL(proxyURL, url) {
	const URLs = await ADD(proxyURL);
	const fullURL = URLs[Math.floor(Math.random() * URLs.length)];

	// 解析目标 URL
	let parsedURL = new URL(fullURL);
	console.log(parsedURL);
	// 提取并可能修改 URL 组件
	let URLProtocol = parsedURL.protocol.slice(0, -1) || 'https';
	let URLHostname = parsedURL.hostname;
	let URLPathname = parsedURL.pathname;
	let URLSearch = parsedURL.search;

	// 处理 pathname
	if (URLPathname.charAt(URLPathname.length - 1) == '/') {
		URLPathname = URLPathname.slice(0, -1);
	}
	URLPathname += url.pathname;

	// 构建新的 URL
	let newURL = `${URLProtocol}://${URLHostname}${URLPathname}${URLSearch}`;

	// 反向代理请求
	let response = await fetch(newURL);

	// 创建新的响应
	let newResponse = new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers: response.headers
	});

	// 添加自定义头部，包含 URL 信息
	//newResponse.headers.set('X-Proxied-By', 'Cloudflare Worker');
	//newResponse.headers.set('X-Original-URL', fullURL);
	newResponse.headers.set('X-New-URL', newURL);

	return newResponse;
}

async function getSUB(api, request, 追加UA, userAgentHeader) {
	if (!api || api.length === 0) {
		return [];
	}
	let newapi = "";
	let 订阅转换URLs = "";
	let 异常订阅 = "";
	const controller = new AbortController(); // 创建一个AbortController实例，用于取消请求
	const timeout = setTimeout(() => {
		controller.abort(); // 2秒后取消所有请求
	}, 2000);

	try {
		// 使用Promise.allSettled等待所有API请求完成，无论成功或失败
		const responses = await Promise.allSettled(api.map(apiUrl => getUrl(request, apiUrl, 追加UA, userAgentHeader).then(response => response.ok ? response.text() : Promise.reject(response))));

		// 遍历所有响应
		const modifiedResponses = responses.map((response, index) => {
			// 检查是否请求成功
			if (response.status === 'rejected') {
				const reason = response.reason;
				if (reason && reason.name === 'AbortError') {
					return {
						status: '超时',
						value: null,
						apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
					};
				}
				console.error(`请求失败: ${api[index]}, 错误信息: ${reason.status} ${reason.statusText}`);
				return {
					status: '请求失败',
					value: null,
					apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
				};
			}
			return {
				status: response.status,
				value: response.value,
				apiUrl: api[index] // 将原始的apiUrl添加到返回对象中
			};
		});

		console.log(modifiedResponses); // 输出修改后的响应数组

		for (const response of modifiedResponses) {
			// 检查响应状态是否为'fulfilled'
			if (response.status === 'fulfilled') {
				const content = await response.value || 'null'; // 获取响应的内容
				if (content.includes('proxies') && content.includes('proxy-groups')) {
					订阅转换URLs += "|" + response.apiUrl; // Clash 配置
				} else if (content.includes('outbounds') && content.includes('inbounds')) {
					订阅转换URLs += "|" + response.apiUrl; // Singbox 配置
				} else if (content.includes('://')) {
					newapi += content + '\n'; // 追加内容
				} else if (isValidBase64(content)){
					newapi += base64Decode(content) + '\n'; // 解码并追加内容
				} else {
					const 异常订阅LINK = `trojan://CMLiussss@127.0.0.1:8888?security=tls&allowInsecure=1&type=tcp&headerType=none#%E5%BC%82%E5%B8%B8%E8%AE%A2%E9%98%85%20${response.apiUrl.split('://')[1].split('/')[0]}`;
					console.log(异常订阅LINK);
					异常订阅 += `${异常订阅LINK}\n`;
				}
			}
		}
	} catch (error) {
		console.error(error); // 捕获并输出错误信息
	} finally {
		clearTimeout(timeout); // 清除定时器
	}

	const 订阅内容 = await ADD(newapi + 异常订阅); // 将处理后的内容转换为数组
	// 返回处理后的结果
	return [订阅内容, 订阅转换URLs];
}

async function getUrl(request, targetUrl, 追加UA, userAgentHeader) {
	// 设置自定义 User-Agent
	const newHeaders = new Headers(request.headers);
	newHeaders.set("User-Agent", `v2rayN/${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`);

	// 构建新的请求对象
	const modifiedRequest = new Request(targetUrl, {
		method: request.method,
		headers: newHeaders,
		body: request.method === "GET" ? null : request.body,
		redirect: "follow"
	});

	// 输出请求的详细信息
	console.log(`请求URL: ${targetUrl}`);
	console.log(`请求头: ${JSON.stringify([...newHeaders])}`);
	console.log(`请求方法: ${request.method}`);
	console.log(`请求体: ${request.method === "GET" ? null : request.body}`);

	// 发送请求并返回响应
	return fetch(modifiedRequest);
}

function isValidBase64(str) {
	const base64Regex = /^[A-Za-z0-9+/=]+$/;
	return base64Regex.test(str);
}
