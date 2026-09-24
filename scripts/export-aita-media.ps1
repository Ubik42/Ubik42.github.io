param(
    [string]$Presentation = 'D:\3D\UE Projects\AITASystems58\Presentation'
)
$ErrorActionPreference = 'Stop'
$destination = Join-Path $PSScriptRoot '../public/media/repositories/aita-systems'
$master = Join-Path $Presentation 'AITA_EditorShowcase_4K.mp4'
$names = @('toon', 'wind', 'schooling', 'cloth', 'cosmos', 'fog', 'fracture')
# The finished recording contains seven consecutive exhibits, 181 frames each at 30 fps.
$frameCount = & ffprobe -v error -select_streams v:0 -show_entries stream=nb_frames -of default=nw=1:nk=1 $master
if ($LASTEXITCODE -ne 0 -or [int]$frameCount -ne 1267) { throw 'Expected the 1267-frame editor master.' }
New-Item -ItemType Directory -Path $destination -Force | Out-Null
for ($i = 0; $i -lt $names.Count; $i++) {
    $name = $names[$i]
    $start = $i * 181
    $end = $start + 181
    & ffmpeg -hide_banner -loglevel error -y -i $master -vf "trim=start_frame=${start}:end_frame=${end},setpts=PTS-STARTPTS,scale=1920:-2" -an -c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p -movflags +faststart (Join-Path $destination "$name.mp4")
    if ($LASTEXITCODE -ne 0) { throw "Video export failed: $name" }
    $capture = Join-Path $Presentation ('Captures/{0:D2}.png' -f ($i + 1))
    & ffmpeg -hide_banner -loglevel error -y -i $capture -vf 'scale=1600:-2' -frames:v 1 -c:v libwebp -quality 88 (Join-Path $destination "$name.webp")
    if ($LASTEXITCODE -ne 0) { throw "Cover export failed: $name" }
    Write-Output "$name : frames $start..$($end - 1)"
}
