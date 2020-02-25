const rootStyles = window.getComputedStyle(document.documentElement)

if(rootStyles.getPropertyValue('--book-cover-width-large') != null){
    ready()
} else {
    document.getElementById('main-css').addEventListener('load', ready)
}

function ready(){
    const coverWidth = rootStyles.getPropertyValue('--book-cover-width-large')
    const coverAspectRatio = rootStyles.getPropertyValue('--book-cover-aspect-ratio')
    const coverHeight = coverWidth / coverAspectRatio
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginFileEncode,
    )
    
    FilePond.setOptions({
        stylePanelAspectRatio: 1 / coverAspectRatio,
        imageResizeTargetWidth: coverWidth,
        imageResizeTargetHeight: coverHeight
    })
    
    FilePond.parse(document.body);
}