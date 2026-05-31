import { QuartzFilterPlugin } from "../types"
import { getDate } from "../../components/Date"

// Excludes content whose publication date is in the future, so scheduled/embargoed
// posts (e.g. dated tomorrow) don't go live until that date — they appear on the next
// build on or after their date.
export const RemoveFuturePublished: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveFuturePublished",
  shouldPublish(ctx, [_tree, vfile]) {
    const date = getDate(ctx.cfg.configuration, vfile.data)
    if (!date) return true
    return date.getTime() <= Date.now()
  },
})
