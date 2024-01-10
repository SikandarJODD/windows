import { writable } from "svelte/store";
import NetflixIcon from "$lib/images/netflixIcon.svg";
import NotionIcon from "$lib/images/notion.svg";
import Chrome from "$lib/images/chrome.svg";
export let allIcons = writable([
    {
        id: 1,
        name: "Netflix",
        iconImg: NetflixIcon,
        swapClass: "highliht",
        content: ""
    },
    {
        id: 2,
        name: "notion",
        iconImg: NotionIcon,
        swapClass: "highliht",
        content: ""
    },
    {
        id: 3,
        name: "Chrome",
        iconImg: Chrome,
        swapClass: "highliht",
        content: ""
    },
])