import { Typography } from "@mui/material"
import React from "react"
import { Score1, Score3, Score4, Score11, Score12 } from "../images";

const Body = () => (
    <React.Fragment>
        <Typography variant="h5">General Description</Typography>
        <p>
            There are two Scorekeepers who will document the points earned during each jam and keep a running tally of the score. Each will be assigned to watch a Jammer Referee during the game; they will stand outside of the track, on either side of the Scoreboard Operator. Scorekeepers need to focus on their assigned Referees and maintain good communication with the Operator.
        </p>
        <Typography variant="h5">Equipment Needed</Typography>
        <ul>
            <li>Clipboard</li>
            <li>Score sheets</li>
            <li>Pen/Pencil</li>
            <li>Coloured Wristband</li>
        </ul>
        <Typography variant="h5">Paperwork</Typography>
        <p>
            Prior to the start of the game, the Head NSO will assign a team/colour, introduce each Scorekeeper to the Jam Referee they will watch, and provide a coloured wristband. When the paperwork is provided, fill in the name, date, and colour boxes (if it has not already been done in advance).
        </p>
        <Score1 />
        <p>
            The columns of information to be watched for during the game are listed in the black bar along the top of the page:
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>JAM</span> — Starting with 1 each period, write the jam number as it happens. DO NOT fill in the jam numbers ahead of time. If a Star Pass should occur, write ‘SP’ in the box below the current jam.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>JAMMER’S NUMBER</span> – Write the alphanumeric number of the Jammer in this box. If a Star Pass should occur, write the number of the Pivot who received the star (they are now the Jammer).
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>LOST</span> – If the Jammer loses the ability to become the Lead Jammer, or if they lose the status itself after acquiring it, mark an ‘X’ in this box. (Note: do not mark if the Jammer simply does not become Lead Jammer.) Reasons for loss of Lead status are:
        </p>
        <ul>
            <li>Jammer is sent to the Box as Lead Jammer</li>
            <li>Jammer is sent to the Box before completing their initial trip and Lead has not yet been awarded</li>
            <li>Jammer completes a star pass after earning Lead Jammer status or before it has been awarded</li>
            <li>Jammer or Jammer’s teammate intentionally removes their helmet cover for any other reason after earning Lead Jammer status or before it has been awarded</li>
            <li>Jammer is the first to complete their initial trip but is not awarded Lead due to no pass/no penalty</li>
        </ul>
        <p>
            <span style={{ fontWeight: 'bold' }}>LEAD</span> – When the Referee signals that the Jammer has earned Lead Jammer status, mark this box with an ‘X’.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>CALL</span> – If the Jammer of the team calls off the jam prior to its natural conclusion, mark this box.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>INJ</span> – Mark this box if the jam is called-off due to an injury.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>NI</span> – (No Initial) If the Jammer does not complete their initial trip through the pack before the jam ends, mark an ‘X’ in this box. Leave the box for Trip 2 empty as the Jammer has not started scoring trips.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>TRIP 2, TRIP 3, ETC.</span> – Each time the Jammer goes through the pack, the Referee will signal how many points they earned on that trip. (Note: there are no points earned on their first/initial trip through the pack.) Scoring for jams with ten or more scoring trips should be marked in the Trip 10 column as: [ninth scoring trip points] + [tenth scoring trip points]+ …
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>JAM TOTAL</span> – At the end of the jam, tally the points for each trip.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>GAME TOTAL</span> – Keep a running tally for the entire period. The period 1 total (at the bottom of the page) will carry over into the next period.
        </p>
        <Score3 />
        <Typography variant="caption">
            <ol type="a">
                <li>During the second jam, there was a Star Pass; Pivot #2121 becomes the new Jammer and continues where the previous Jammer left off.</li>
                <li>In jam three, the Jammer did not get through the pack at all before the jam ended.</li>
                <li>Jammer #55 earned the status of Lead Jammer and called off the jam before its 2 minute natural conclusion.</li>
            </ol>
        </Typography>
        <Typography variant="h5">Star Passes</Typography>
        <p>
            Both Scorekeepers will write in two rows in a jam which has a Star Pass.
        </p>
        <p>
            The Scorekeeper for the Star Passing team should move to the next row and write ‘SP’ in the Jam # column. Write the new Jammer’s number in the Jammer’s Number column, and pick up the scoring on the trip where the previous Jammer left off.
        </p>
        <p>
            If the original Jammer is still on the initial trip when a Star Pass occurs, the NI column should be marked. If the new Jammer also does not complete the initial trip, then the NI column should be marked in the SP row as well.
        </p>
        <p>
            The Scorekeeper for the NON-Star Passing team should wait to see if their team performs a Star Pass as well. If that team did not Star Pass during the same jam, at end of the jam move to the next row and write ‘SP*’ in the Jam # column, leaving the rest of that row intentionally blank.
        </p>
        <p>
            NOTE: The current Standard Practice is to record points only when the Jammer Referee has signalled points at the end of a Jammer’s trip. This means all points scored on a scoring trip of a Star Pass should be recorded for the new Jammer.
        </p>
        <Typography variant="h6">One team star passes</Typography>
        <Score3 />
        <Typography variant="caption">During the second jam, there was a Star Pass; Pivot #2121 becomes the new Jammer and continues where the previous Jammer left off.  </Typography>
        <Score4 />
        <Typography variant="caption">The opposing team did not Star Pass, so ‘SP*’ has been entered. </Typography>
        <Typography variant="h6">Both teams star pass</Typography>
        <Score3 />
        <Typography variant="caption">During the second jam, there was a Star Pass; Pivot #2121 becomes the new Jammer and continues where the previous Jammer left off.</Typography>
        <Score11 />
        <Typography variant="caption">The opposing team also had a Star Pass; Pivot #80 becomes the new Jammer and continues where the previous Jammer left off. There only needs to be one line for the star passes; as both teams had a star pass there is no need for a SP* line.</Typography>
        <Typography variant="h5">Overtime Jam</Typography>
        <p>
            A game may never end in a tie score. If the score is tied at the end of a game, an overtime jam will determine the winner.
        </p>
        <p>
            Overtime jams last the full two minutes, and there is no Lead Jammer. Jammers will begin scoring points on their initial trip. The score for the first trip will be recorded in the Trip 2 column as such: [Initial Trip points] + [Second Trip points].
        </p>
        <p>
            If the score remains tied, additional overtime jams will be played until the tie is broken.
        </p>
        <Typography variant="h5">Procedures</Typography>
        <p>
            Prior to the first jam, tie the coloured wristband around the wrist of the hand to be used to be signal to the Referees. When the game begins, watch the assigned Referee and do not get distracted.
        </p>
        <p>
            As the Jammers make their way through the pack on their initial trip, know which Jammer (if either) earned Lead Jammer status. On subsequent trips, Referees will signal how many points were earned. Use the hand with the wristband to mimic the points back to the Referee. Watch the Jammer Referee for a score, especially at the end of a jam as they may have scored points. Wait for this before reporting the score to the Scoreboard Operator.
        </p>
        <p>
            Communication between both Scorekeepers and the Scoreboard Operator is very important. After each scoring trip announce Colour and Points scored to the Scoreboard Operator, e.g. ‘Red 4’. Other things to announce are lead, lost lead, and star pass so all three NSOs can hear. Check regularly that all three have the same current jam number.
        </p>
        <p>
            The Official Score is the one that is shown on the Scoreboard. Corrections to this can only be made during the lineup and the jam following the one where the error occurred. After this, the score displayed will be taken to be the correct one. It is extremely important to ensure that the Scoreboard Operator has been given the correct number of points for each trip and jam. If an error has occured but it is too late to correct the Official Score, make a note of the reason for the error as this will need to be recorded by the HNSO.
        </p>
        <p>
            If less than two minutes remain of the second period, the score must be corrected before the start of the following jam. The Head Referee may choose to take an Official Timeout at this point to give the opportunity to check this.
        </p>
        <p>
            A tip for making sure a score has been recorded when needed is to place a dot in the bottom left of each trip box as the Jammer starts that trip. This dot means that a score needs to be recorded in that box, even if it is zero. Further information can be found in Nine Inch Wheel&#8217;s Dot System.
        </p>
        <p>
            Before the Jammer passes through the pack again, double-check the maths. Between jams and during timeouts, double-check the maths. Any time there is a break in the game play, double-check the maths.
        </p>
        <Typography variant="h5">Penalties</Typography>
        <Typography variant="h6">Illegal Procedure</Typography>
        <p style={{ fontWeight: 'bold' }}>Rule 2.2.2</p>
        <p style={{ fontStyle: 'italic' }}>
            A Jammer without Lead Jammer status successfully calling off a jam
        </p>
        <Typography variant="h6">Misconduct</Typography>
        <p style={{ fontWeight: 'bold' }}>Scenario C4.3.F</p>
        <p style={{ fontStyle: 'italic' }}>
            Profane, abusive, and obscene language is unsporting and degrading to the sport, but should not always be penalized. If said language was audible to the audience or via broadcast, [the skater] is penalized. If [the skater]’s profanity was directed at an Official, [the skater] is penalized. Otherwise, a few choice words directed at a teammate or opponent should result in a warning and be penalized if the behavior continues.
        </p>
        <p>
            Scorekeepers will be able to issue these penalties themselves unless the Head Referee says otherwise, this will be clarified before the start of the game. If the penalty should be issued to the Captain, this should be reported to the Head Referee who will issue this.
        </p>
        <p>
            Issuing penalties must be done in accordance with Officiating Discretion. The correct verbal cue and hand signal must be used, these can be found in <a href="http://static.wftda.com/officiating/wftda-officiating-cues-codes-and-signals.pdf" target="_blank">WFTDA Officiating Cues, Codes And Signals</a>.
        </p>
        <Typography variant="h5">End of First Period</Typography>
        <p>
            Complete the boxes at the bottom of the page to count up the total number of jams, the total number of Lost, Lead, Call, Injury and No Initials, and the total score for each trip. The combined total of the trips should equal the total score.
        </p>
        <Score12 />
        <p>
            Find the colour’s assigned Jammer Referee and ask them to double check the scores and the maths. They can then sign this sheet.
        </p>
        <p>
            Transcribe the Game Total at the bottom of period one to the top of the next sheet. The Jammer Referees will switch their roles and the Scorekeeper will switch with them, staying with the same Referee for the second period. Trade paperwork and coloured wristbands with the other Scorekeeper.
        </p>
        <p>
            NOTE: At the end of the game, the Head NSO will get the final scores and record them on the IGRF before getting signatures from the Team Captains.
        </p>
    </React.Fragment>
)

export const ScoreKeeperSection = {
    title: 'Scorekeeper',
    body: <Body />
};
