import { InsideWhiteboardSection } from "./InsideWhiteboardSection"
import { JamTimerSection } from "./JamTimerSection"
import { LineupTrackerSection } from "./LineupTrackerSection"
import { PageTemplate } from "./PageTemplate"
import { PenaltyBoxManagerSection } from "./PenaltyBoxManagerSection"
import { PenaltyBoxTimerSection } from "./PenaltyBoxTimerSection"
import { PenaltyLineupTrackerSection } from "./PenaltyLineupTrackerSection"
import { PenaltyTrackerSection } from "./PenaltyTrackerSection"
import { PenaltyWranglerSection } from "./PenaltyWranglerSection"
import { ScoreboardOperatorSection } from "./ScoreboardOperatorSection"
import { ScoreKeeperSection } from "./ScoreKeeperSection"

export const Home = () => {

    return (
        <PageTemplate pages={[ 
            PenaltyTrackerSection,
            PenaltyLineupTrackerSection,
            JamTimerSection,
            InsideWhiteboardSection,
            PenaltyWranglerSection,
            PenaltyBoxManagerSection,
            PenaltyBoxTimerSection,
            ScoreKeeperSection,
            ScoreboardOperatorSection,
            LineupTrackerSection
        ]} />
    )
}