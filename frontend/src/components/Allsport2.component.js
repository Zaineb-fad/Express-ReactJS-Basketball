import React from "react";
import "./Allsport2.component.css";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import {  Image } from 'react-bootstrap';


// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <Card style={{ width: '35rem' }}>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        First
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Prev
                      </NavLink>
                    </NavItem>
                   
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                  <h1>alkSPORT.com rounds up all the latest transfer news and football gossip, and brings you expert opinion on all the big talking points…
    </h1><p>
                        
We also look ahead to this evening’s Champions League action, with RB Leipzig vs Manchester United LIVE on talkSPORT


HEADLINES

Manchester United told to loan Paul Pogba out to Joey Barton’s Fleetwood Town after latest Mino Raiola comments
Manchester United team news: Edinson Cavani and Anthony Martial injured for RB Leipzig Champions League clash
Mesut Ozil continues war of words with Piers Morgan as Gunners outcast hits back at Paul Pogba comparison and claim that ‘real Arsenal fans aren’t behind you’
Mino Raiola accused of ‘selfishness’ over ‘shocking timing’ of Paul Pogba bombshell
Man United should sell Paul Pogba for £100m says Red Devils fan, who wants Mesut Ozil signed from Arsenal
Sir Alex Ferguson distrusted Mino Raiola and was happy when Paul Pogba completed his Juventus transfer
Gabby Agbonlahor reveals he was racially abused by 12-year-olds at Millwall and says he would CANCEL his Lions contract after fans boo as players take the knee
Troy Deeney vows to walk if racially abused as Watford captain passionately outlines why we must keep speaking about racism
1 of 2
40 MINUTES AGO8th December 2020
Manchester United's Champions League qualification hangs in the balance, as they must at least draw with RB Leipzig tonight to reach the knockout rounds.

And the Red Devils will be hoping they get a repeat of the reverse fixture played at Old Trafford in October, when Marcus Rashford hit a hat-trick as United thrashed their German opponents 5-0.


AN HOUR AGO8th December 2020
It’s all or nothing for Manchester United in the Champions League tonight.

Ole Gunnar Solskjaer’s men visit RB Leipzig with qualification to the knockout stages of the competition on the line.

A win, of course, will send them through, and a draw is enough due to their head-to-head record with the Germans, but defeat, even if Group H rivals Paris Saint-Germain lose to Istanbul Basaksehir, will see them crash out.

talkSPORT brings you full LIVE commentary of the huge European clash, but how will the Red Devils line-up in Germany?

We have taken a look at the latest team news and predicted the Manchester United XI, HERE



2 HOURS AGO8th December 2020
Frank Lampard has brushed off Jurgen Klopp’s suggestions that Chelsea are favourites for the Premier League, insisting Liverpool and Manchester City are still the front-runners for the title.

The Reds’ attempts to defend their crown has been dealt repeated blows with a hefty injury list besieged on the reigning champions.

However, Klopp’s side remain in second place and level on points with leaders Tottenham.

Chelsea sit third and are now unbeaten in nine league games, with Klopp having hailed the Blues’ ‘unbelievable’ squad strength when marking out Lampard’s men for glory.

Stamford Bridge boss Lampard was quick to shake off Klopp’s tip, however, insisting his third-place Blues remain a work in progress after their £220million summer recruitment drive.

“I’m not sure anyone actually really went for it,” said Lampard, of Klopp making Chelsea favourites for the title.

“I think Liverpool and Manchester City seem to be pretty much everyone’s favourites, when they perform the way they have in the last three years, building up the squads they have over the last few years. Quite rightly so.

“Even with injuries you look at Liverpool’s squad, the team they put out last night (against Wolves), they cope with those injuries. They have a big squad and most teams in the Premier League do.

“Tottenham are in the equation, so are Manchester United and so are others at this point. It’s very tight.”

READ MORE HERE



3 HOURS AGO8th December 2020
Arsenal outcast Mesut Ozil has fired back at Piers Morgan as their war of words continues on Twitter.

Ozil was left out of Arsenal’s 25-man Premier League squad for the first half of the 2020/21 season, but the Germany playmaker has remained very vocal on social media in support of his teammates.

And many Arsenal fans still appear to back Ozil, especially now Mikel Arteta’s side are struggling on the pitch and could really do with a top-class playmaker to create goalscoring chances.

There have been many calls to ‘freeozil’ on social media, and the German showed his thanks for those supporting him on Twitter on Monday.

He captioned a photo of him in front of fans at the Emirates: “The feeling of having fans behind you… grateful bestfans hardtimes.”

But Morgan, the outspoken Gooner who has long criticised Ozil, was not buying into the sentiment.

He replied to Ozil’s tweet: “Real Arsenal fans aren’t behind you. You’re our Paul Pogba – massively overpaid, massively under-performing & shockingly overinflated sense of your own importance. truth.”

Ozil, who earns a whopping £350,000-per-week at the Emirates, hit back in typically ruthless fashion.

He replied: “Piers, buddy, are you still bitter from the other day? It seems like you’re not a big fan of World Champions.

“I wish you would see as good as you hear things.”

FULL STORY HERE



3 HOURS AGO8th December 2020
Marseille boss Andre Villas-Boas believes Manchester City are good enough to win the Champions League with their 'B' team.

The French side are expecting to find out just how strong City's so-called second string can be when the clubs meet at the Etihad Stadium on Wednesday.

Having already secured a place in the Champions League last 16, City manager Pep Guardiola has suggested he will make wholesale changes for the Group C encounter.

Porto have already taken the runners-up spot in the pool but the game is still important for Marseille as they look to pip Olympiacos to the consolation of a Europa League place.

Villas-Boas, the former Chelsea and Tottenham manager, said: “Qualifying is not in our hands.

“Hopefully Porto will do us a favour but we know it is going to be hard against Manchester City. They have so many options, and so many top-level options as well.

“We cannot rely on Porto but we must be at our best to get a positive result because City's 'B' team are strong enough to win the Champions League, I think.”



4 HOURS AGO8th December 2020
Manchester United fans have expressed widespread disdain for Paul Pogba after his agent Mino Raiola’s latest comments – and many have phoned talkSPORT saying it’s time to sell the Frenchman.

However, none took it quite so far as Chris the Red Devils supporter, who wants Pogba loaned out to Joey Barton’s League One side Fleetwood Town!

He told the Breakfast show: “What an idiot [Raiola]! Nobody is going to take Pogba, nobody!

“What manager is going to take him? They’ll be looking over their shoulder all the time.

“If you don’t pick him in the team, is he going to go to the press? We’ve got a big elephant in the room that we don’t want.”

With that in mind, Chris suggests Man United should cut their losses and loan Pogba out to Barton at Fleetwood.

Because, well, why not?

“The team are better without him. Loan him out to Joey Barton!” Chris added.

“Whether we get money for him or not, just get him out. If anybody wanted him, they would’ve come for him in the summer.

“Nobody wants him because nobody wants the headache of his agent.”

FULL STORY HERE




                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./202.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                       5 HOURS AGO8th December 2020
Liverpool manager Jurgen Klopp has not made a decision on what side to pick for the Champions League dead rubber against Midtjylland but insists he still wants to win the match.

With the Reds already qualified as Group D winners, Klopp has the rare luxury of resting some of his over-worked senior players – Andy Robertson has played every minute of every Premier League match this season, for example – and offering more chances to youngsters.

But Klopp said there was still a burden of responsibility on him and the club to be competitive.

“Our Champions League squad was really already very young, we have had four, five, six players involved in the squad so far and yes they will travel and then we will make decisions,” he said.

“The analysis is not finalised yet and they will all play a part in my my thinking. It is the first time we don't have to get a result in the last match of the group stage and so we have to consider the general situation, that's clear, but we have to consider we are Liverpool and we want to win the game.

“All these things will lead to a line-up.”



5 HOURS AGO8th December 2020
Arsenal and Tottenham are considering a January move for AC Milan midfielder Franck Kessie, reports claim.

The Ivory Coast international has been instrumental in the Rossoneri’s superb start to the season, forming an imperious partnership with Ismael Bennacer in the midfield as the seven-time European champions sit top of the Serie A standings.

Reports in Italy say that Milan are taking steps to secure the renewal of Kessie, whose current contract is set to expire in June 2022.

However, according to Calciomercato, the 23-year-old is attracting interest from north London duo Arsenal and Spurs.

READ MORE HERE



5 HOURS AGO8th December 2020
Manchester United could sign Paulo Dybala in a swap deal for Paul Pogba, reports claim.

Pogba's future has once again become a huge talking point as his agent, Mino Raiola, said the midfielder is 'unhappy' at Old Trafford with his time in Manchester 'over'.

A January transfer has been mooted with PSG, Real Madrid and Pogba's former club Juventus all keen on the France international.

And, according to the Daily Mail, Dybala is a long-term target of United's and could be made available for transfer, which has increased chances of a swap deal.

Juve are allegedly ready to cash in on Dybala and earlier this week reports emerged claiming he has been offered to each of the Premier League's Big Six clubs.



6 HOURS AGO8th December 2020
Leeds defender Robin Koch will undergo surgery on the knee injury sustained in Saturday's Premier League defeat to Chelsea.

Koch had been nursing a knee problem since his debut against Liverpool, and after his latest setback he will face some time on the sidelines.

Leeds confirmed in a statement: “Unfortunately, following a collision in the Chelsea game, he suffered further damage to his knee and the club have made the decision that surgery is required to remedy the problem.”



6 HOURS AGO8th December 2020
Newcastle's players will return to training on Tuesday following the postponement of their game against Aston Villa last week due to a rise in Covid-19 cases.

United's Darsley Park training headquarters had been closed as a result of the spike, which led to the first Premier League fixture this season to be postponed due to the pandemic.

The Magpies were due to head for Villa Park on Friday evening, but were granted permission to reschedule the fixture.

In a statement on Twitter, the Premier League club wrote: “United's players will train at the Training Centre today following a temporary closure last week due to a rise in Covid-19 cases.

“Those who had tested positive will follow relevant protocols before returning. Thanks for your messages of support to our players and staff.”

Players and staff who were tested on Sunday have since undergone another round of checks as medics work to identify the source of the outbreak, with the return of squad members to Tyneside following last month's international break understood to be a focus.

Newcastle, who are due to face West Brom at St James' Park on Saturday, have not identified those affected or confirmed the number of cases amid speculation that the outbreak may have reached double figures.

7 HOURS AGO8th December 2020
Mino Raiola has been told to ‘shut up and let Paul Pogba play football’ by former Tottenham midfielder Jamie O’Hara.

Pogba’s name was all over the back pages this morning after the Frenchman’s agent publicly announced his time at Old Trafford is ‘over’. With all eyes on United’s must-draw Champions League match against RB Leipzig – which is LIVE on talkSPORT on Tuesday night – Raiola seized the opportunity to put his client up for sale yet again, despite little transfer speculation and a return to form for Pobga over the weekend.

Even still, Raiola’s comments do not come as too much of a surprise, given his outspoken nature.

And O’Hara is quite frankly sick of it.

“He’s all about himself, making a name for himself and bigging himself up,” O’Hara told Tuesday’s talkSPORT Breakfast.

“I’ve got this player, I can end FIFA, Pogba’s finished – just shut up, mate!

“Seriously, if he was my agent, I would phone him up and say, ‘Keep you mouth shut, I’m playing for Manchester United, I’m not playing well, I’ve just scored on the weekend and now I’m thrown all over the papers again’.”

READ MORE HERE



8 HOURS AGO8th December 2020
Three-time Serie A winner Mario Balotelli has completed a move to Italian second-tier side Monza where he will link up with former Milan teammate Kevin-Prince Boateng.

The signing also sees the 30-year-old striker reunited with ex-Milan president Silvio Berlusconi, who is overseeing an ambitious project at the Serie B outfit.

The former Manchester City and Liverpool striker, who has been without a club since leaving Brescia earlier this summer, has signed a short-term deal until the end of the season.

The Italian recently trained with Serie D side Franciacorta in November and was also linked with Championship club Barnsley.

He told Gazzetta dello Sport: “I thank the president [Silvio] Berlusconi and Adriano Galliani for this opportunity. I will do everything to help Monza reach Serie A.”

FULL STORY HERE



8 HOURS AGO8th December 2020
Frank Lampard has backed Kai Havertz to realise his “top-class” potential at Chelsea now he is putting his coronavirus illness behind him.

Havertz missed several weeks of the campaign after testing positive for Covid-19, with Lampard now revealing the condition took a greater toll on the Germany playmaker than previously thought.

The 21-year-old has yet to find top form over a sustained spell since joining the Blues in a £70million summer switch from Bayer Leverkusen, but Lampard has tipped Havertz to become of the world's best players in his time at Stamford Bridge.

“Kai is fitting in really well, I said it before but I want to make it clear that he had strong symptoms of Covid,” Lampard said ahead of Tuesday's Champions League clash with Krasnodar.

“He was very ill and struggling for a while and not all players have it like that, some are symptom-free.

“I had to factor that in so that's why it took two or three weeks before he is starting a game again after he returned from Covid.

“Before he fell ill and turned in a positive test, I thought his form was fantastic.

“He played some really good stuff in the number eight role, the advanced midfield role and I was delighted for him. You could see he was enjoying it, but Covid cut that short.

“Long term, I have no concerns. In fact, I feel quite the opposite. He is going to be a huge player for this football club, in the Premier League, as he has all the attributes and attitude to be an absolutely top-class player for the league and in the world.

“That's how highly I rate him and I think people that analyse him, it can be quick reactions at times involving price tags and so on.

“But I think we have to understand that some of the best players that have come to this country have found it quite hard for some time to get used to the Premier League and I think Kai has actually been very good.

“Covid has made it difficult for him but he is a top player and will be a top player for us.”



9 HOURS AGO8th December 2020
Ally McCoist laid into Paul Pogba's agent Mino Raiola after he told the press on Monday that the midfielder is unhappy at Manchester United.

Pogba's future has once again come into doubt with a host of clubs, including PSG, Real Madrid and Juventus, long-term admirers of the France international.

Raiola said it's 'over' for Pogba with many now believing the midfielder will leave Old Trafford – either in the January transfer window or next summer.

The agent has been widely criticised for speaking out, rather than Pogba doing so himself – especially as Raiola's quotes came just one day ahead of a crunch Champions League clash with RB Leipzig and with the Manchester derby to follow at the weekend.

“The timing is shocking, and at the very best it's selfish,” said Ally as he joined those voicing their criticism of Raiola.

“I actually had to laugh at the bit about Paul being unhappy. I know one or two Man United fans who are quite unhappy with Paul!

“Who does he think he is coming out with that at this point in time?

“If his contract expires in a year and a half, this probably is the best moment in time to sell him, because his value will be decreasing. 

“I don't think the move has been a very talented player, he's won a World Cup, but he's not really hit it at Man United.

“Ole clearly prefers Fred and McTominay in the holding positions in the middle of the park. He's not going to play before Fernandes.

“The timing is just so selfish, Man United and Solskjaer have got a massive game tonight, absolutely massive, a game they cannot afford to lose, and he's coming out with this nonsense. 

“If you dissect what it does say, I don't necessarily disagree that Pogba should go in January.”


9 HOURS AGO8th December 2020
Ally McCoist has hit out at VAR once again following the latest drama involving the technology in the Premier League.

Brighton lost to Southampton on Monday night with Saints' late winner coming from the penalty spot.

The spot kick was awarded after a VAR review, as referee David Coote had initially given Southampton a free-kick for Solly March's challenge on Kyle Walker-Peters.

VAR decided the challenge happened inside the area, despite many critics believing the tackle quite clearly occurred outside the area.

And Ally, being one of those critics, again ranted about the technology on Tuesday's talkSPORT Breakfast.

“It's not a penalty, it's a free-kick at the edge of the box,” said the Rangers legend.



“It's a foul outside the box, free-kick, referee was right, two minutes of everybody's life we will never get back. Take the free-kick, get on with the game – end of.

“That's it.

“I mean, it's a free-kick… and then you watch it and it's still a free-kick!

“I'll tell you something else: the players were absolutely spot on, and that must have been really difficult because they were actually watching it and they all know it's a free-kick outside the box, and they give a penalty.

“How many times, in all seriousness, have I said to you in the last two or three weeks about 'clear and obvious'?”


9 HOURS AGO8th December 2020
A Manchester United fan has told talkSPORT he wants to get rid of Paul Pogba… and sign Mesut Ozil on a free transfer.

The France midfielder's agent, Mino Raiola, came out on Monday and said it's 'over' for Pogba at United to once again cast doubts over his future.

Real Madrid, PSG and Juventus have all been linked with Pogba over the past few years, and could he finally be nearing the end of his time at Old Trafford?

Well, one United fan – Barry – joined talkSPORT on Monday and said he'd gladly get rid of Pogba – with Arsenal outcast Ozil the perfect signing to replace him with.

“I don't know whether he is happy or unhappy because he never actually tells us himself,” began Barry on Drive.

“But I would say he should come out and say 'I want to stay' or 'I don't want to stay, and I want to go'.



“And I would let him go and get the £100million.

“And I am just throwing one in at you, because I think [Jose] Mourinho might try to sign him [for Spurs] – Mesut Ozil, maybe on a free.

“I would throw him in at United as a creative player, and get rid of Fred and Martial.

“I think Ozil would be a good signing for United and I think him and Van de Beek and Fernandes would gel quite well.

“I know he's not a grafter – everybody knows that – but he's just got that spark and quality that we need; maybe what Pogba has got but doesn't quite show us often enough.”


18 HOURS AGO7th December 2020
Frank Lampard insists he is under no pressure to sell out-of-favour Chelsea goalkeeper Kepa Arrizabalaga.

Lampard revealed the Spain international will start Tuesday's dead-rubber Champions League clash with Krasnodar at Stamford Bridge.

The 26-year-old will make his first appearance since October, having slipped out of the team following Edouard Mendy's £20million arrival from Rennes.

Kepa became a £71million world-record signing for a goalkeeper when joining Chelsea from Athletic Bilbao in 2018, but has failed to convince at Stamford Bridge and especially under Lampard.

Lampard has previously admitted Kepa was struggling with his confidence and form, but Chelsea have already won Group E leaving Tuesday's clash the ideal opportunity to rotate resources.

Chelsea could reasonably seek to cut any losses on Kepa, but Lampard insisted the club's board have made no such moves.

Asked if he is under any pressure to move Kepa on, Lampard said: “No, there's no pressure. The pressure, and I'm not saying this has been spoken about, is to win games.

“I have to do the right thing game by game of course. And Mendy has made himself a permanent fixture at this point.

“Because the pressure to win games means I pick people in form, goalkeeper, striker, winger, whoever.

“But at the same time with the game tomorrow it's obviously an opportunity to give Edou a rest and Kepa a game; he's been training well and he deserves it.



19 HOURS AGO7th December 2020
VAR took centre stage again as the Brighton players were furious when a penalty was awarded to Southampton on Monday night.

Referee David Coote gave a free-kick the Saints’ way just outside the box when Solly March fouled Kyle Walker-Peters in the 77th minute.

There were no questions about whether it was a foul but there were some doubts about whether it happened in or outside the box.

VAR stepped in and after a lengthy delay decided that it had taken place inside the box and a penalty was duly awarded, much to the anger of the Seagulls players.

The game was finely balanced at 1-1 at the time and Danny Ings stepped up and made no mistake from the spot to make it 2-1.

FULL STORY



20 HOURS AGO7th December 2020
Celtic have given manager Neil Lennon their public backing for a second week running.

Further protests followed Sunday's 1-1 home draw with St Johnstone as Celtic went five games without a win but Lennon will remain in charge.

A club statement read: “In light of the ongoing speculation regarding the position of our football manager, Neil Lennon, the board of Celtic Football Club wishes to make clear its continuing support for Neil and his backroom team.

“The board recognises and understands the importance of winning the league championship this season and that, as Neil himself has made clear, recent performances and results have been disappointing.

“The board is committed to delivering success for Celtic supporters.”

21 HOURS AGO7th December 2020
Harry Maguire is in a confident mood ahead of Manchester United’s crucial Champions League clash at RB Leipzig.

Ole Gunnar Solskjaer’s men are level on nine points with Tuesday’s hosts and last season’s finalists Paris Saint-Germain.

United will seal their place in the round of 16 if they avoid defeat to Leipzig, but a return to Europa League action awaits in 2021 should they falter against a side thumped 5-0 at Old Trafford in October.

Asked if it was unacceptable for a club of such stature to fail to get out of the group, United captain Maguire said: “Well, of course we expect to go through in the group.

“Whatever teams you put in our group, any four teams, we expect to go through.”

FULL STORY



21 HOURS AGO7th December 2020
Manchester City have announced defender Taylor Harwood-Bellis has signed a new four-year contract extension.

The 18-year-old City academy product was handed his first-team debut in September 2019 and has made six senior appearances in total, all in cup competitions.

He scored his maiden goal in a 4-1 FA Cup win against Port Vale at the Etihad Stadium in January.

Regarding the deal to 2024, Harwood-Bellis told CityTV: “This is a dream come true for me and my family. I've been at City since I was young and I love this football club.

“To have played for the first team was the culmination of so much hard work, and this new contract feels like the next big step in my career.

“The club have given me so much and I want to thank them. So many coaches across the academy have helped me become the player I am today and now Pep (Guardiola) and his staff are helping me to improve.

“The confidence Pep has placed in me makes me feel like anything is possible, and the work he and his staff do on the training field is making me a better defender.

“I am happy with my progress. I am at the right place to keep improving and developing.

“I'm just so glad this contract is all sorted because it now means I can concentrate on improving further and achieving my goals.”

A DAY AGO7th December 2020
Paul Pogba is 'unhappy' at Manchester United according to his agent Mino Raiola.

The Italian has given an explosive interview with Tuttosport and claimed Pogba's time at United was 'over'.

He said: “Paul is unhappy with Man United as he is no longer able to express himself in the way that he would like and as he is expected to. Paul needs a new team, a change of air. He is under contract for the next 18 months and it will expire in the summer of 2022.

“However, I think that the best solution for both Pogba and Man Utd is that he goes in the next transfer window. If not, the Old Trafford club know that they risk losing him on a free transfer as it is not Paul's intention to extend his contract.

“Manchester United board know the risk losing Pogba for free given the player has no intention of extending. If somebody does not understand that, then they do not understand football. In any case, let them blame me if Paul leaves.”



A DAY AGO7th December 2020
England must face one of the best strikers in world football on their road to qualifying for the Qatar World Cup in 2022.

The draw was made for the qualifying group stages on Monday afternoon, with matches set to be played between March and November next year.

Gareth Southgate’s side were drawn against familiar foe Poland, who count Robert Lewandowski among their ranks.

Lewandowski has arguably been the best footballer in the world in 2020 helping Bayern Munich to the treble last season and was a strong favourite for the Ballon d’Or before the decision was made to cancel it.

The Poles have faced the Three Lions in qualifying for the 1974, 1990, 1994, 2006 and 2014 World Cups, as well as taking on England in the finals in Mexico in 1986.

FULL STORY



A DAY AGO7th December 2020
England have been drawn against Poland, Hungary, Albania, Andorra and San Marino in qualifying for the 2022 World Cup.

The draw was made this afternoon with the other Home Nations also learning who they will need to beat in order to qualify for the tournament in Qatar.

Northern Ireland have been drawn against Italy, Switzerland, Bulgaria and Lithuania, Wales will face Belgium, the Czech Republic, Belarus and Estonia, and Scotland will play Denmark, Austria, Israel, the Faroe Islands and Moldova.


                      </p><div className="j1" >
                      <Col xs={6} md={4}>
      <Image src="./203.PNG" thumbnail />
    </Col></div>
                    </TabPane>
                    
                   
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;

