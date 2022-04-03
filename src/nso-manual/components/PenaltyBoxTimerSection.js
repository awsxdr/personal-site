import { Typography } from "@mui/material"
import { PenaltyBox1, PenaltyBox2, PenaltyBox3, PenaltyBox4 } from "../images";
import React from "react"

const Body = () => (
    <React.Fragment>
        <Typography variant="h5">General Description</Typography>
        <p>
            During the game, the main duties will be to record when a skater enters the Box, who the skater is, when the skater can leave, and verbally notify the skater when their time has been served.
        </p>
        <Typography variant="h5">Equipment Needed</Typography>
        <ul>
            <li>Clipboard</li>
            <li>Tracking Sheet</li>
            <li>Pen/Pencil</li>
            <li>Stopwatch</li>
        </ul>
        <Typography variant="h5">Paperwork</Typography>
        <p>
            Prior to the start of the game, the Penalty Box Manager will assign a team for the Penalty Box Timer to follow. They may switch teams during halftime, at the discretion of the Manager. When the paperwork is provided, fill in the name, date, and colour boxes (if it has not already been done in advance).
        </p>
        <p>
            Also, in the BOX TRIPS column, skater numbers should be printed in advance. If not, fill in the numbers manually before the game starts. Copy from the IGRF or the Inside Whiteboard.
        </p>
        <PenaltyBox1 />
        <p>
            The columns of information to be tracked during the game are listed in the black bar along the top of the page:
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>PERIOD</span> – Two sheets are provided for all games, one sheet can be used for each period, or continue all box trips on the same sheet. This box should be used to mark which period the box trip occurred in.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>JAM</span> # – Starting with 1 each period, write the jam number of when a skater enters the Penalty Box. DO NOT fill in the jam numbers ahead of time. Multiple skaters may be entering the Penalty Box during the same jam and each skater must be accounted for individually.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>BTWN JAMS</span> — If the skater enters the Box between jams, mark the ‘Btwn Jams’ column, and enter the upcoming jam # in the Jam # column.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>TEAM</span> – Provide the team colour (often unnecessary as there is one sheet per team).
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>SKATER</span> # — Write the skater’s number in this box.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>POS</span> – Indicate what position the skater is playing. Enter J for Jammer (wearing helmet cover with a star), P for Pivot (helmet cover with a stripe), B for Blocker (no helmet cover).
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>IN, STAND, DONE</span> – When the first skater enters the Penalty Box, the stopwatch will read ‘0:00’, this is the IN time. As soon as the skater sits, start the stopwatch and the skater will be in the Penalty Box for 30 seconds (unless a Referee indicates multiple penalties). ‘0:30’ will be entered for DONE. Since the skater is required to stand for the last 10 seconds, subtract those seconds from the DONE time and that is written in the STAND box, in this case ‘0:20’.
        </p>
        <p>
            If another skater from the team enters the Box while the first skater is still being timed, write the time that the stopwatch indicates for IN, then add 30 seconds and write this under DONE, now subtract 10 seconds to show what time to STAND.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>STOPWATCH AT END OF JAM</span> – Time stops between jams, and restarts at the beginning of the next jam. If a skater has not finished serving their time before the end of the jam, indicate the time shown on the stopwatch in these boxes. If short enough, a skater can sit in the Box for multiple jams.
        </p>
        <PenaltyBox2 />
        <Typography variant="caption">
            <ol type="a">
                <li>After skater #22 served 30 seconds, the stopwatch was reset.</li>
                <li>#46 entered the Penalty Box in between jams 3 and 4. Twenty-five seconds into jam 4, #808 was sent to the Box. At thirty seconds after starting the watch for #46, skater #321 entered the Box.</li>
                <li>With #808 and #321 in the Box, the jam ended and the clock was stopped at 0:35.</li>
                <li>#808 was released at 0:55. But, the jam ended again 3 seconds later with the penalty clock at 0:58, forcing #321 to remain in the Box.</li>
            </ol>
        </Typography>
        <p>
            <span style={{ fontWeight: 'bold' }}>BOX TRIPS</span> – The pink boxes of this column should be pre-printed with skater numbers in alphanumeric order (if not, do this before the game begins). For every penalty a Skater sits in the Box for, draw a hash mark in the white area below their number. If that skater is sent to the Box for a 7th penalty, they have fouled-out.
        </p>
        <p>
            If a Skater leaves the box early, indicate the time when the Skater left along with the note ‘Left Early’. When the Skater returns to the Penalty Box, add a new line for the remaining time and additional penalty, if applicable.
        </p>
        <p>
            If a Skater is found to have sat in error or their penalty is overturned, draw a single line through the row for that trip and note either ‘No penalty’ or ‘Penalty overturned’. Erase the tally mark from the Total Penalties section since there is no penalty that corresponds to this trip.
        </p>
        <p>
            If a Skater is substituted for Foul Out, Expulsion or Injury and the timing has started, add a slash and then Substitute’s number. Write a note in the margin to explain the change.
        </p>
        <p>
            If a Skater is substituted for Foul Out, Expulsion or Injury and the timing has not started, write the Substitute’s number on the paperwork. Write a note in the margin to include the penalised Skater’s number and to explain the change. Ensure that the Box Trip tally is marked against the penalised Skater and not the Substitute.
        </p>
        <PenaltyBox3 />
        <Typography variant="caption">
            <p>Substitute After Timing Started</p>
            <p>a. During the tenth jam, Pivot #101 is sent to the box. At the end of the Jam they are substituted by #22 after serving 14 seconds.</p>
        </Typography>
        <PenaltyBox4 />
        <Typography variant="caption">
            <p>Substitute Before Timing Started</p>
            <p>b. During the tenth jam, Pivot #101 is sent to the box, but do not sit until after the end of the Jam. They are substituted by #22. (Not seen in the example above, notes are added to the margin with details of the substitution).</p>
        </Typography>
        <Typography variant="h5">Procedures</Typography>
        <p>
            Box Timers stand in/behind the Penalty Box, without obstructing the seats, so that they may see the numbers on the backs of the skaters as well as communicate verbal commands.
        </p>
        <p>
            To help facilitate in knowing the jam to be indicated, there are two columns of numbers on the right side of the page (one for each period) that can be circled and crossed-off as needed. If at any point the jam number has not been followed, communicate with other NSOs or check the Scoreboard.
        </p>
        <p>
            Skaters will serve 30 seconds in the Penalty Box. An Official will notify the Box Timers if more than one penalty was issued and the skater should serve more time. The hand signal for this will be to tap the wrist with two or three fingers, indicating the number of multiple penalties. Mark that multiple penalties are being served in the margin.
        </p>
        <p>
            Skaters in the Box must sit and their time does not start until they are seated. Skaters are required to stand for the final 10 seconds of their penalty, notify them with the verbal cue ‘Colour, #, STAND’ (i.e. for #242 of the red team, say ‘Red, Two-Four-Two, Stand!’). If they do not stand fully upright, stop their time and notify them with the verbal cue ‘TIME STOPPED, Colour, #’. Restart the watch as soon as they comply.
        </p>
        <p>
            When a skater’s penalty time has ended, use the verbal cue ‘Colour, #, DONE’. Try to synchronise saying the word ‘DONE’ as the last second ticks off.
        </p>
        <p>
            Hard of hearing skaters sometimes request that Box Timers tap them on the shoulder for Stand and Done, especially in noisy venues. Do not do this to any skater unless they explicitly request it as many people are not comfortable with this.
        </p>
        <p>
            If the jam ends while a skater is still in the Box, stop the stopwatch and document the time indicated in the appropriate area of the paperwork.
        </p>
        <p>
            A maximum of three skaters from each team can be seated in the Box: 2 Blockers and 1 Jammer. If two Blockers are seated in the Box and a third is called for a penalty, wave that Blocker to return to the track until there is an opening. Once there is an opening, notify the Box Manager who will call for the skater to enter the Box. (Note: when a skater stands for the final 10 seconds, their seat is now open and can be occupied by an incoming skater). If one (or both) of the Blockers is standing for the last 10 seconds of their time, and a third Blocker is sent to the Box, the third Blocker may sit and have their time begin without being waved-off.
        </p>
        <p>
            Skaters should enter the Box in a controlled manner. Any skater coming in ‘hot’ and knocking chairs out of place, potentially injuring Officials, or colliding with other skaters will be penalised.
        </p>
        <p>
            Check the number of box trips against the Inside Whiteboard regularly to check that the information has been recorded accurately. Report any discrepancies so that the information between the Penalty Tracker and the box staff matches. This is important to ensure that skaters are not fouled out incorrectly. Information for 5, 6 and 7 penalties will be confirmed by the Box Manager.
        </p>
        <p>
            If a skater has entered the Penalty Box to serve their seventh penalty, and has therefore fouled-out, they should continue to serve their time as normal. Once they are instructed to Stand, move the skater to an area in or next to the Box where they will not block any chairs or skaters. At the end of the jam, check to see if an Official Timeout or Official Review is requested. If not, instruct the skater to collect any personal belongings from their team bench and then leave the bench area. If the jam ends before the penalty time has expired, the team will need to substitute the fouled-out skater. Work with the Referees and Teams to do this as quickly as possible before the next jam starts. Retrieving the jammer or pivot helmet cover of the fouled-out skater helps to identify the position the substituted skater needs to serve as, and ensures that it is returned to the Team.
        </p>
        <p>
            If a skater has entered the Penalty Box to serve their penalty but the Head Referee has expelled them from the game, they may be removed from the Box before their time has expired. The chair should be marked to show that it is still ‘occupied’, and timing should continue as normal. Another skater should not sit in this chair until there are fewer than 10 seconds remaining. If the jam ends before the penalty time has expired, the team will need to substitute the expelled skater.
        </p>
        <p>
            Jammers have a special set of rules and the Box Manager will provide assistance in these circumstances.
        </p>
        <p>
            Skaters should not be released from the Box at the end of the game until the score is Final.
        </p>
        <p>
            Communication with the Penalty Box Manager and other Penalty Box Timer is very important. It is a good idea to discuss how the communication will work before the start of the game. It is also good to check the number of the jam with each other.
        </p>
        <Typography variant="h5">Penalties</Typography>
        <Typography variant="h6">Illegal Procedure</Typography>
        <p style={{ fontWeight: 'bold' }}>Rule 4.4</p>
        <p style={{ fontStyle: 'italic' }}>
            Nobody may enter the Penalty Box except for Officials and Skaters who are serving penalties.
        </p>
        <ul style={{ fontStyle: 'italic' }}>
            <li>All medical support staff will be allowed into the box as necessary, but may only communicate with penalized Skaters regarding medical matters. </li>
            <li>If a team’s non-skating bench staff enters the Penalty Box, this penalty will be issued to their team’s Captain. </li>
            <li>If a skater or bench staff accidentally enters the Penalty Box but does not communicate with penalised skaters, nor interferes with the running of the Box, no penalty is to be issued.</li>
        </ul>
        <p style={{ fontWeight: 'bold' }}>Rule 1.2 and Scenario C4.2.4.C</p>
        <p style={{ fontStyle: 'italic' }}>
            If a penalised Skater removes safety equipment while in the Penalty Box. A penalised Skater may remove their mouth guard while in Penalty Box whether sat or stood. Merely adjusting safety equipment while in the Penalty Box is not to be penalised.
        </p>
        <p style={{ fontWeight: 'bold' }}>Scenario C4.2.4.D and C4.4.1.B</p>
        <p style={{ fontStyle: 'italic' }}>
            A Skater completely exiting the Penalty Box before they are released by an Official. (Note: If a Skater unintentionally leaves the box due to venue constraints while moving around (e.g. instructed to change seat or allowing another Skater to sit behind them) then the Skater should not be penalised).
        </p>
        <ul style={{ fontStyle: 'italic' }}>
            <li>If the Penalty Box Official instructs the Skater to leave early, this penalty does not apply. </li>
            <li>Scenario C4.2.4.D: Skaters who leave without being dismissed but have completed their time are not to be penalised. </li>
        </ul>
        <Typography variant="h6">Interference</Typography>
        <p style={{ fontWeight: 'bold' }}>Scenario C4.2.3.A</p>
        <p style={{ fontStyle: 'italic' }}>
            Failure to be on the track for the next jam at jam start, in the appropriate position (Pivot or Blocker), when currently in the Penalty Box queue. One penalty will be assessed to each offending Skater.
        </p>
        <Typography variant="h6">Misconduct</Typography>
        <p style={{ fontWeight: 'bold' }}>Scenario C4.2.4.E</p>
        <p style={{ fontStyle: 'italic' }}>
            Throwing objects which could cause harm (e.g. water bottles, tools) into the box is to be penalised.
        </p>
        <p style={{ fontWeight: 'bold' }}>Scenario C4.3.A</p>
        <p style={{ fontStyle: 'italic' }}>
            Imitating an Official to confuse other skaters.
        </p>
        <p style={{ fontWeight: 'bold' }}>Scenario C4.3.F</p>
        <p style={{ fontStyle: 'italic' }}>
            Profane, abusive, and obscene language is unsporting and degrading to the sport, but should not always be penalized. If said language was audible to the audience or via broadcast, [the skater] is penalized. If [the skater]’s profanity was directed at an Official, [the skater] is penalized. Otherwise, a few choice words directed at a teammate or opponent should result in a warning and be penalized if the behavior continues.
        </p>
        <p style={{ fontWeight: 'bold' }}>Scenario C4.5.B</p>
        <p style={{ fontStyle: 'italic' }}>
            Entering the box in an uncontrolled manner which causes impact to an Official or Skater in the Box, or forces them to vacate their position.
        </p>
        <p>
            Penalty Box Timers will be able to issue these penalties themselves unless the Head Referee says otherwise, this will be clarified before the start of the game. If the penalty should be issued to the Captain, this should be reported to the Head Referee who will issue this.
        </p>
        <p>
            Issuing penalties must be done in accordance with Officiating Discretion. The correct verbal cue and hand signal must be used, these can be found in <a href="http://static.wftda.com/officiating/wftda-officiating-cues-codes-and-signals.pdf" target="_blank">WFTDA Officiating Cues, Codes And Signals</a>.
        </p>
        <Typography variant="h5">End of First Period</Typography>
        <p>
            Consult with the Penalty Tracker, Inside Whiteboard and Lineup Tracker to ensure all the penalties are accurate. If any skaters were in the Box at the end of the first period, carry this information over to the next sheet. Notify the Outside Pack Referee prior to the start of the second period. These skaters must return and finish their time during the second period.
        </p>
    </React.Fragment>
)

export const PenaltyBoxTimerSection = {
    title: 'Penalty Box Timer',
    body: <Body />
};
