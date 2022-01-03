import DownloadItem = chrome.downloads.DownloadItem;

function isTwitter(item: DownloadItem) {
    try {
        const url = new URL(item.referrer)
        return url.host === "twitter.com"
    } catch (e) {
        return false
    }
}

chrome.downloads.onDeterminingFilename.addListener(
    (downloadItem, suggest) => {
        console.group(`"${downloadItem.url}"`)
        const isTw = isTwitter(downloadItem)
        const isJfif = downloadItem.mime === "image/jpeg" && downloadItem.filename.endsWith(".jfif")

        console.log("Is referrer twitter.com:", isTw)
        console.log("Is file jfif:", isJfif)
        console.log("DownloadItem:", downloadItem)

        if (!isTw) {
            suggest()
        } else if (isJfif) {
            suggest({filename: downloadItem.filename.replace(".jfif", ".jpg")})
        } else {
            suggest()
        }
        console.groupEnd()
        return true
    }
)
