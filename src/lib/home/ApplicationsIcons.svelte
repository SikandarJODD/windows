<script>
  import BoxIcon from "./BoxIcon.svelte";
  import NetflixIcon from "$lib/images/netflixIcon.svg";
  import NotionIcon from "$lib/images/notion.svg";
  import Chrome from "$lib/images/chrome.svg";

  let file = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.08"  stroke-linecap="round" stroke-linejoin="round" class="h-10 w-10 lucide lucide-file"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`;
</script>

<div class=" flex gap-3">
  <BoxIcon name="Netflix" iconImg={NetflixIcon} />
  <BoxIcon name="code.txt" iconSvgCode={file} />
  <BoxIcon name="notion" iconImg={NotionIcon} />
  <BoxIcon name="Chrome" iconImg={Chrome} />
</div>
