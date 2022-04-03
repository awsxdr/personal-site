import { Typography } from "@mui/material"
import React from "react"
import { PenaltyLineup1, PenaltyLineup2, PenaltyLineup3, PenaltyLineup4, PenaltyLineup5 } from "../images";

const Body = () => (
    <React.Fragment>
        <Typography variant="h5">General Description</Typography>
        <p>
            Standing on the inside of the track, Penalty Trackers will document any penalties called out by the Referees. Working closely with the Penalty Wrangler, it is important to have good communication without being distracted. A good Penalty Tracker will have some prior experience working games, and will have memorised the penalty codes.
        </p>
        <Typography variant="h5">Equipment Needed</Typography>
        <ul>
            <li>Clipboard</li>
            <li>Tracking Forms</li>
            <li>Pen/Pencil</li>
        </ul>
        <Typography variant="h5">Paperwork</Typography>
        <p>
            Prior to the start of the game, the Head NSO will assign a team/colour to track. When the paperwork is provided, ﬁll in the name, date, and colour boxes (if it has not already been done in advance). Check to make sure the skater numbers have been pre-populated under both the ‘Skater #’ columns on both left and right sides. If not, enter this information manually, prior to the start of the game.
        </p>
        <PenaltyLineup1 />
        <p>
            The columns of information to watch for during the game are listed in the black bar along the top of the page:
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>JAM</span> — Starting with 1 each period, write the jam number as it happens. DO NOT ﬁll in the jam numbers ahead of time. If a Star Pass should occur, write ‘SP’ in the box below the current jam (see Star Passes).
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>NO PIVOT</span> – Mark this box with an ‘X’ if either a) the team does not ﬁeld a Pivot, or b) a Star Pass situation occurs (see Star Passes). (If no Pivot is ﬁelded at the start of the jam, any Blocker number can be here)
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>JAMMER, PIVOT, BLOCKER</span> – Write the skater numbers in these boxes. If the team did not ﬁeld all skaters, write ‘n/a’ in the box(es). If the team did ﬁeld all skaters but not all numbers were tracked, write ‘?’ in the box(es).
        </p>
        <ul>
            <li>The Jammer is indicated by the skater wearing a helmet cover with two Stars on it.</li>
            <li>The Pivot is indicated by the skater wearing a helmet cover with a Stripe on it.</li>
            <li>The Blockers are the remaining skaters and may be written in no particular order.</li>
        </ul>
        <p>
        Alphanumeric order is preferred, if possible, but not required
        </p>
        <p>
        <span style={{ fontWeight: 'bold' }}>BOX</span> – If a skater of the assigned team is issued a penalty and sits in the Box during a jam in progress, indicate this with ‘-’ in the ﬁrst box. If the skater leaves the Penalty Box during the same jam, indicate this by turning the ‘-’ into an ‘+’. Should the skater be sent to the Box a second time in the same jam, use the next box.
        </p>
        <p>
            If the jam ends before the skater is seated in the box and they sit in between jams, carry that skater’s information down to the next jam and mark the ﬁrst box of the new jam with an ‘S’ (started in the Box). If the skater then leaves in this jam, add a line to the ‘S’ to create ‘$’.
        </p>
        <p>
            If the jam ends before the skater leaves the Penalty Box, carry that skater’s information down to the next jam and mark the ﬁrst box of the new jam with an ‘S’ (in the Box). If the skater leaves the Box in that jam, add a line to the ‘S’ to create ‘$’.
        </p>
        <p>
            If a skater is substituted in the next jam (due to injury, foul out or expulsion), write down the number of the new skater and mark the ﬁrst box of the new jam with an ‘S’ (in the Box), then continue as above. Write a note in the margin to clarify why the skater number has changed.
        </p>
        <p>
            If a jam is called-oﬀ due to an injury, the skater needs to be substituted in the Box, or there is a delay for the skater to leave track in between jams, write ‘3’ in the ﬁrst available box of the injured skater.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>ROSTER</span> — These columns should be pre-populated with the alphanumeric numbers of each skater participating in the game (including the alternates) from both teams.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>PENALTY / JAM #</span> — When a Referee calls a penalty on a skater, in the top row of boxes, indicate the appropriate penalty code from the list at the bottom of the page. In the bottom row, write the jam number that the penalty occurred in. If a skater is issued a penalty between two jams, then the jam number of the jam in which the skater was participating should be used. Any Delay of Game penalties should be recorded for the upcoming jam, which is the jam that is being delayed to issue the penalty. If a Delay of Game penalty is not assessed prior to the start of a jam, the penalty should be assessed and recorded in the following jam.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>FO/EXP</span> – If a skater sits in the Penalty Box for seven penalties, that skater has Fouled Out. The abbreviation ‘FO’ is written in the top box and the jam it occurred is written in the bottom box.
        </p>
        <p>
            If a skater is expelled from a game by the Head Referee, the appropriate penalty code is entered into the top box, and the jam it occurred is written in the bottom box.
        </p>
        <PenaltyLineup2 />
        <Typography variant="caption">
            <ol type="a">
                <li>In the ﬁrst jam, Pivot #101 was sent to the Box, and returned to play in the same jam.</li>
                <li>Blocker #2121 went to the Box twice in the same jam.</li>
                <li>When #2121 went to the Box in the second jam, the jam ended before their time was served and they returned to play in the third jam.</li>
                <li>#01 went to the box in the ﬁrst jam but did not sit before the jam ended, they served their time and returned to play in the second jam.</li>
                <li>#16 went to the box in the second jam but did not sit before the jam ended, the third jam also ended before their time was served and they returned to play in the forth jam.</li>
            </ol>
            This shows that skater #2121 was issued a total of 3 penalties; Use of Forearms and a Back Block in the ﬁrst jam, and a Low Block in jam 2.
        </Typography>
        <p>
            <span style={{ fontWeight: 'bold' }}>NON-SKATER EXPULSIONS</span> — Penalties associated with the expulsion of a non-skating member of the bench staﬀ (which are not otherwise assigned to the team Captain) are noted here. The name of the bench staﬀ member should be written in and penalties should be noted in the same way as the rest of the Penalty/Jam # section.
        </p>
        <Typography variant="h5">Star Passes</Typography>
        <p>
            Both Penalty Lineup Trackers will write in two rows in a jam which has a Star Pass.
        </p>
        <p>
            The Penalty Lineup Tracker for the Star Passing team should move to the next row and write ‘SP’ in the Jam column, and update the Star Passing team’s new lineup with the Jammer and Pivot numbers reversed (also mark the no Pivot column) and the same Blockers’ numbers. Mark all skater Penalty Box exits/entries which occur after a Star Pass in the row with the new Jammer. If a Blocker is in the Box at the time of the Star Pass, mark ‘S’ in the ﬁrst box on the new line and continue as if that Blocker started the jam in the Box.
        </p>
        <p>
            The Penalty Lineup Tracker for the NON-Star Passing team should wait to see if their team also performs a Star Pass. Mark all skater Penalty Box exits/entries which occur after a Star Pass in the row with the team’s current Jammer. At the end of the jam, if that team did not Star Pass during jam with a Star Pass, move to the next row and write ‘SP*’ in the Jam column, leaving the rest of that row intentionally blank.
        </p>
        <p>
            NOTE: The current Standard Practice for Penalty Lineup Trackers is to mark the Penalty Box entries and exits on the row of the current Jammer. If only one team makes a Star Pass, each team’s post-Star Pass Penalty Box entries and exits will be recorded on diﬀerent rows (new row for Star Passing team, original jam row for NON-Star Passing team).
        </p>
        <Typography variant="h6">One team star passes</Typography>
        <PenaltyLineup3 />
        <Typography variant="caption">
            During the second jam, there was a Star Pass; Pivot #2121 becomes the new Jammer. Blockers #99 and #66 were in the Box at the time of the Star Pass. Blocker #66 left the Box after the Star Pass, Blocker #99 remained in the Box until the next jam.
        </Typography>
        <PenaltyLineup4 />
        <Typography variant="caption">
            The opposing team did not Star Pass, so ‘SP*’ has been entered. Blocker #4’s entry and exit to the Box has been marked as normal. (Not seen in the example above, the jam following the Star Pass would be indicated as 3, then 4, etc.)
        </Typography>
        <Typography variant="h6">Both teams star pass</Typography>
        <PenaltyLineup3 />
        <Typography variant="caption">
            During the second jam, there was a Star Pass; Pivot #2121 becomes the new Jammer. Blockers #99 and #66 were in the Box at the time of the Star Pass. Blocker #66 left the Box after the Star Pass, Blocker #99 remained in the Box until the next jam.
        </Typography>
        <PenaltyLineup5 />
        <Typography variant="caption">
            The opposing team also had a Star Pass; Pivot #80 becomes the new Jammer. Blocker #4 entered and exited the box before the star pass. (Not seen in the example above, the jam following the Star Pass would be indicated as 3, then 4, etc.)
        </Typography>
        <Typography variant="h5">Procedures</Typography>
        <p>
        Trackers stand near to the Inside Whiteboard during the game. (They may move around the Inside Whiteboard as needed, but must not obstruct the progress of the Referees.) Write down the lineup numbers quickly, but be aware that last-second changes can be made, so it is suggested to not ﬁll the entire box the ﬁrst time. Trackers may enter the track during the 30 second line up to see hard-to-read numbers. Be aware of the 5 second warning and leave the track before the whistle.
        </p>
        <p>
            As play begins, they will listen and watch the Referees, while simultaneously keeping an eye on the Penalty Wrangler. As penalties are called, the Tracker must document them as quickly as possible and notify the Inside Whiteboard with ‘Colour, #, Penalty’. If a skater from the assigned team enters the Penalty Box (wait for them to sit, they might be waved-oﬀ), note this as above. Check the Inside Whiteboard is up to date with the paperwork every 5-10 jams and during any timeouts.
        </p>
        <p>
            In the absence of a Wrangler, Trackers will follow the Inside Pack Referees around the track, without hindering their progress and moving out of the way as needed.
        </p>
        <p>
            With the Wrangler as an assistant, regularly check the whiteboard they hold up for penalties and let them know once they have been documented.
        </p>
        <p>
            Injured skaters must sit-out 3 jams before returning to play. If an injured skater is on the track before three jams have passed, notify a Pack Referee immediately. If possible, communicate this to the Jam Timer so that they know not to start the next jam. This also applies to any skater that was required to be substituted in the Penalty Box due to injury or equipment malfunction, or required an Oﬃcial Timeout to be called for them to leave track at the end of a jam, but did not have a jam called dead for them.
        </p>
        <p>
            If there appears to be a infraction being committed (i.e. too many, or wrong skaters on the track), warn the skaters of the error.
        </p>
        <p>
            Communication with the other Penalty Lineup Tracker, the Penalty Wrangler and the Inside Whiteboard is very important. It is a good idea to discuss how the communication will work before the start of the game. It is also a good idea to discuss positioning with the Wrangler before a game and decide where to be during the jams.
        </p>
        <p>
            Announce any penalties coming in, when they sit and when skaters are standing/leaving the Box. This is especially important during jammer swaps. Communicate any skaters sitting between jams to ensure it is on paperwork.
        </p>
        <p>
            If a skater cannot be seen, ask the other Penalty Lineup Tracker to announce the numbers so these can be recorded quickly.
        </p>
        <p>
            Announce when a star pass is happening so that it can be recorded by both Penalty Lineup Trackers. It is also good to check the number of the jam with each other.
        </p>
        <p>
            Find out from the Head Referee when they would like to know if a skater has 6 penalties, and if they want to know how many penalties a Jammer has at the start of each jam.
        </p>
        <Typography variant="h5">Penalties</Typography>
        <Typography variant="h6">Misconduct</Typography>
        <p style={{ fontWeight: 'bold' }}>
            Scenario C4.3.F
            </p>
        <p style={{ fontStyle: 'italic' }}>
            Profane, abusive, and obscene language is unsporting and degrading to the sport, but should not always be penalized. If said language was audible to the audience or via broadcast, [the skater] is penalized. If [the skater]’s profanity was directed at an Oﬃcial, [the skater] is penalized. Otherwise, a few choice words directed at a teammate or opponent should result in a warning and be penalized if the behavior continues.
        </p>
        <p>
            Penalty Lineup Trackers will be able to issue this penalty themselves unless the Head Referee says otherwise, this will be clariﬁed before the start of the game. If the penalty should be issued to the Captain, this should be reported to the Head Referee who will issue this.
        </p>
        <p>
            Issuing penalties must be done in accordance with Officiating Discretion. The correct verbal cue and hand signal must be used, these can be found in <a href="http://static.wftda.com/officiating/wftda-officiating-cues-codes-and-signals.pdf" target="_blank">WFTDA Officiating Cues, Codes And Signals</a>.
        </p>
        <Typography variant="h5">End of First Period</Typography>
        <p>
            Consult with the Inside Whiteboard and Penalty Box Timers to ensure all the penalties are accurate.
        </p>
        <p>
            Accrued penalties need to be carried over to the sheet for the second period. Do this by shading in the appropriate blocks on the next sheet. Remember that with each new period, the Jam Number is reset to 1.
        </p>
        <p>
            For any skaters still serving time at the end of the period, their information should be marked on the second period sheet as if it were being carried over from jam to jam. Be sure to communicate this information to the Penalty Box and the Outside Pack Referee before the second period starts.
        </p>
    </React.Fragment>
)

export const PenaltyLineupTrackerSection = {
    title: 'Penalty Lineup Tracker',
    body: <Body />
};
