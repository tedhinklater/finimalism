# Finimalism for Jellyfin v10.11.x  ![jsDelivr](https://data.jsdelivr.com/v1/package/gh/tedhinklater/finimalism/badge) 

```css
@import url("https://cdn.jsdelivr.net/gh/tedhinklater/finimalism@main/Finimalism11.css");
```

Just paste the import line into your "Dashboard > Branding > CSS" section, or "User Settings > Display > CSS" section.

### Note: For Jellyfin Media Player, you need the latest [Jellyfin Desktop 2.0.0](https://flathub.org/en/apps/org.jellyfin.JellyfinDesktop)

# Example with [Home Screen Sections](https://github.com/IAmParadox27/jellyfin-plugin-home-sections) / [Featured Content Bar](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar) / [Jellyfin Enhanced](https://github.com/n00bcodr/Jellyfin-Enhanced)

<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/979bf451-53f6-43f9-8032-fc0093ec1736" />

![movie](https://github.com/user-attachments/assets/dfd42d2a-d539-47c2-a277-ba3be2b83635)

<img width="1280" height="720" alt="movie" src="https://i.postimg.cc/SRddKgkm/output.webp" />

![player](https://github.com/user-attachments/assets/7353a321-1107-4198-b9a2-1519fc96ddc2)

## Custom colours

Below is an example of how to use custom colours

```css
@import url("https://cdn.jsdelivr.net/gh/tedhinklater/finimalism@main/Finimalism11.css");
/* Custom Colours */
:root { 
  --accent: 202, 20, 20; 
  --backdropBlur: blur(0px);
  --rounding: 0.8em; 
  --tint: 0, 0, 0; 
  --tint2: 176, 34, 7; 
}
```
<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/c44da46f-d141-4a3d-9e9f-6bf6d06fe41c" />

Add this for horizontal scrollers on the homepage

```css
@import url("https://cdn.jsdelivr.net/gh/tedhinklater/finimalism@main/scrollers-11.css");
```

# Feedback

Bug reports are hugely appreciated, but to save time, can you include this info

- Screen resolution (1920x1080, 2560x1440 etc)
- Screen ratio (16:9, 21:9 etc)
- Device type (Tablet, Desktop, TV)
- Client (Jellyfin Media Player (does not work atm, JMP update soon), Chrome, Firefox etc)
- Which version of the theme (10.11, 10.11-Black, 11)
