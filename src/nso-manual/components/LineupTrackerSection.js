import { Typography } from "@mui/material"
import React from "react"
import { Lineup1, Lineup3, Lineup4, Lineup5, Lineup6 } from "../images";

const Body = () => (
    <React.Fragment>
        <Typography variant="h5">General Description</Typography>
        <p>
            Before each jam begins, write the skater numbers in the appropriate boxes. During the jam, track when the team’s skaters enter and leave the Penalty Box.
        </p>
        <Typography variant="h5">Equipment Needed</Typography>
        <ul>
            <li>Clipboard</li>
            <li>Tracking Forms</li>
            <li>Pen/Pencil</li>
        </ul>
        <Typography variant="h5">Paperwork</Typography>
        <p>
            Prior to the start of the game, the Head NSO will assign a team/colour to watch. When the paperwork is provided, fill in the name, date, and colour boxes (if it has not already been done in advance).
        </p>
        <Lineup1 />
        <p>
            The columns of information to watch for during the game are listed in the black bar along the top of the page:
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>JAM</span> — Starting with 1 each period, write the jam number as it happens. DO NOT fill in the jam numbers ahead of time. If a Star Pass should occur, write ‘SP’ in the box below the current jam.
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>NO PIVOT</span> – Mark this box with an ‘X’ if either a) the team does not field a Pivot, or b) a Star Pass situation occurs. (If no Pivot is fielded at the start of the jam, any Blocker number can be here).
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>JAMMER, PIVOT, BLOCKER</span> – Write the skater numbers in these boxes. If the team did not field all skaters, write ‘n/a’ in the box(es). If the team did field all skaters but not all numbers were tracked, write ‘?’ in the box(es).
        </p>
        <ul>
            <li>The Jammer is indicated by the skater wearing a helmet cover with two Stars on it.</li>
            <li>The Pivot is indicated by the skater wearing a helmet cover with a Stripe on it.</li>
            <li>The Blockers are the remaining skaters and may be written in no particular order.</li>
        </ul>
        <p>
            (Alphanumeric order is preferred, if possible, but not required)
        </p>
        <p>
            <span style={{ fontWeight: 'bold' }}>BOX</span> – If a skater of the assigned team is issued a penalty and sits in the Box during a jam in progress, indicate this with ‘-’ in the first box. If the skater leaves the Penalty Box during the same jam, indicate this by turning the ‘-’ into an ‘+’. Should the skater be sent to the Box a second time in the same jam, use the next box.
        </p>
        <p>
            If the jam ends before the skater is seated in the box and they sit in between jams, carry that skater’s information down to the next jam and mark the first box of the new jam with an ‘S’ (started in the Box). If the skater then leaves in this jam, add a line to the ‘S’ to create ‘$’.
        </p>
        <p>
            If the jam ends before the skater leaves the Penalty Box, carry that skater’s information down to the next jam and mark the first box of the new jam with an ‘S’ (in the Box). If the skater leaves the Box in that jam, add a line to the ‘S’ to create ‘$’.
        </p>
        <p>
            If a skater is substituted in the next jam (due to injury, foul out or expulsion), write down the number of the new skater and mark the first box of the new jam with an ‘S’ (in the Box), then continue as above. Write a note in the margin to clarify why the skater number has changed.
        </p>
        <p>
            If a jam is called-off due to an injury, the skater needs to be substituted in the Box, or there is a delay for the skater to leave track in between jams, write ‘3’ in the first available box of the injured skater.
        </p>
        <p>
            It is advised to keep a tally of the box trips underneath the skaters in the roster on the right. This enables a quick check against the Inside Whiteboard to make sure that the number of trips match the number of penalties. Be aware that skaters may have served multiple penalties on a single trip, and this will not be reflected. Once confirmed, add additional tallies to show the number of penalties served. The multiple penalty trip can also be shown next the jam where the time was served by writing 2x (for example) in the margin.
        </p>
        <Lineup3 />
        <Typography variant="caption">
            <ol type="a">
                <li>In the first jam, Pivot #101 was sent to the Box, and returned to play in the same jam.</li>
                <li>Blocker #66 went to the Box twice in the same jam.</li>
                <li>When #66 went to the Box in the second jam, the jam ended before their time was served and they returned to play in the third jam.</li>
                <li>#01 went to the box in the first jam but did not sit before the jam ended, they served their time and returned to play in the second jam.</li>
                <li>#99 went to the box in the second jam but did not sit before the jam ended, the third jam also ended before their time was served and they returned to play in the fourth jam.</li>
            </ol>
        </Typography>
        <Typography variant="h5">Star Passes</Typography>
        <p>
            Both Lineup Trackers will write in two rows in a jam which has a Star Pass.
        </p>
        <p>
            The Lineup Tracker for the Star Passing team should move to the next row and write ‘SP’ in the Jam column, and update the Star Passing team’s new lineup with the Jammer and Pivot numbers reversed (also mark the no Pivot column) and the same Blockers’ numbers. Mark all skater Penalty Box exits/entries which occur after a Star Pass in the row with the new Jammer. If a Blocker is in the Box at the time of the Star Pass, mark ‘S’ in the first box on the new line and continue as if that Blocker started the jam in the Box.
        </p>
        <p>
            The Lineup Tracker for the NON-Star Passing team should wait to see if their team also performs a Star Pass. Mark all skater Penalty Box exits/entries which occur after a Star Pass in the row with the team’s current Jammer. At the end of the jam, if that team did not Star Pass during jam with a Star Pass, move to the next row and write ‘SP*’ in the Jam column, leaving the rest of that row intentionally blank.
        </p>
        <p>
            NOTE: The current Standard Practice for Lineup Trackers is to mark the Penalty Box entries and exits on the row of the current Jammer. If only one team makes a Star Pass, each team’s post-Star Pass Penalty Box entries and exits will be recorded on different rows (new row for Star Passing team, original jam row for NON-Star Passing team).
        </p>
        <Typography variant="h6">One team star passes</Typography>
        <Lineup4 />
        <Typography variant="caption">During the second jam, there was a Star Pass; Pivot #2121 becomes the new Jammer. Blockers #99 and #66 were in the Box at the time of the Star Pass. Blocker #66 left the Box after the Star Pass, Blocker #99 remained in the Box until the next jam.  </Typography>
        <Lineup5 />
        <Typography variant="caption">The opposing team did not Star Pass, so ‘SP*’ has been entered. Blocker #4’s entry and exit to the Box has been marked as normal. (Not seen in the example above, the jam following the Star Pass would be indicated as 3, then 4, etc.) </Typography>
        <Typography variant="h6">Both teams star pass</Typography>
        <Lineup4 />
        <Typography variant="caption">During the second jam, there was a Star Pass; Pivot #2121 becomes the new Jammer. Blockers #99 and #66 were in the Box at the time of the Star Pass. Blocker #66 left the Box after the Star Pass, Blocker #99 remained in the Box until the next jam.  </Typography>
        <Lineup6 />
        <Typography variant="caption">The opposing team also had a Star Pass; Pivot #80 becomes the new Jammer. Blocker #4 entered and exited the box before the star pass. (Not seen in the example above, the jam following the Star Pass would be indicated as 3, then 4, etc.) </Typography>
        <Typography variant="h5">Procedures</Typography>
        <p>
            Lineup Trackers will sit or stand in an area located behind the Jammer line and off the track so they can see the numbers on the backs of the skaters as they prepare for each jam, and as skaters enter the Penalty Box.
        </p>
        <p>
            Write down the numbers quickly, but be aware that last-second changes can be made, so it is suggested to not fill the entire box the first time. Trackers may enter the track during the 30 second line up to see hard-to-read numbers. Be aware of the 5 second warning and leave the track before the whistle.
        </p>
        <p>
            Listen for Referees to call penalties on skaters from the team. If a skater from the assigned team enters the Penalty Box (wait for them to sit, they might be waved-off), note this as above.
        </p>
        <p>
            Injured skaters must sit-out 3 jams before returning to play. If an injured skater is on the track before three jams have passed, notify the Outside Pack Referee immediately. If possible, communicate this to the Jam Timer so that they know not to start the next jam. This also applies to any skater that was required to be substituted in the Penalty Box due to injury or equipment malfunction, or required an Official Timeout to be called for them to leave track at the end of a jam, but did not have a jam called dead for them.
        </p>
        <p>
            If there appears to be a infraction being committed (i.e. too many, or wrong skaters on the track), warn the skaters of the error.
        </p>
        <p>
            Communication with the other Lineup Tracker is very important. It is a good idea to discuss how the communication will work before the start of the game.
        </p>
        <p>
            Announce any penalties coming in, when they sit and when skaters are standing/leaving the Box. This is especially important during jammer swaps. Communicate any skaters sitting between jams to ensure it is on paperwork.
        </p>
        <p>
            If a skater cannot be seen, ask the other Lineup Tracker to announce the numbers so these can be recorded quickly.
        </p>
        <p>
            Announce when a star pass is happening so that it can be recorded by both Lineup Trackers. It is also good to check the number of the jam with each other.
        </p>
        <p>During all timeouts, check the number of tallies with the Inside Whiteboard/Penalty Tracker and the Penalty Box staff to make sure that they agree.</p>

        <Typography variant="h5">Penalties</Typography>
        <Typography variant="h6">Misconduct</Typography>
        <p style={{ fontWeight: 'bold' }}>Scenario C4.3.F</p>
        <p style={{ fontStyle: 'italic' }}>
            Profane, abusive, and obscene language is unsporting and degrading to the sport, but should not always be penalized. If said language was audible to the audience or via broadcast, [the skater] is penalized. If [the skater]’s profanity was directed at an Official, [the skater] is penalized. Otherwise, a few choice words directed at a teammate or opponent should result in a warning and be penalized if the behavior continues.
        </p>
        <p>
            Lineup Trackers will be able to issue this penalty themselves unless the Head Referee says otherwise, this will be clarified before the start of the game. If the penalty should be issued to the Captain, this should be reported to the Head Referee who will issue this.
        </p>
        <p>
            Issuing penalties must be done in accordance with Officiating Discretion. The correct verbal cue and hand signal must be used, these can be found in <a href="http://static.wftda.com/officiating/wftda-officiating-cues-codes-and-signals.pdf" target="_blank">WFTDA Officiating Cues, Codes And Signals</a>.
        </p>
        <Typography variant="h5">End of First Period</Typography>
        <p>
            For any skaters still serving time at the end of the period, their information should be marked on the second period sheet as if it were being carried over from jam to jam. Be sure to communicate this information to the Penalty Box and the Outside Pack Referee before the second period starts.
        </p>
        <p>
            Check the paperwork with the Penalty Box Timers and Penalty Tracker to ensure that the penalties have been recorded correctly.
        </p>
    </React.Fragment>
)

export const LineupTrackerSection = {
    title: 'Lineup Tracker',
    body: <Body />
};
