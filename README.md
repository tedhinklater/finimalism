# Finimalism for Jellyfin v10.11.x  ![jsDelivr](https://data.jsdelivr.com/v1/package/gh/tedhinklater/finimalism/badge) 

```css
@import url("https://cdn.jsdelivr.net/gh/tedhinklater/finimalism@main/Finimalism11.css");
```

Just paste the import line into your "Dashboard > Branding > CSS" section, or "User Settings > Display > CSS" section.

```Note: Not currently working on Jellyfin Media Player - JMP update coming soon```

### Example with [Home Screen Sections](https://github.com/IAmParadox27/jellyfin-plugin-home-sections) / [Featured Content Bar](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar) / [Jellyfin Enhanced](https://github.com/n00bcodr/Jellyfin-Enhanced)

<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/7f60a777-81fe-460b-b9df-f78f41e25596" />

![output](https://github.com/user-attachments/assets/a87520e2-4973-42c5-8a78-289422644ca8)

![player](https://github.com/user-attachments/assets/7353a321-1107-4198-b9a2-1519fc96ddc2)

## Custom colours

Below is an example of how to use custom colours, and add blur to the wallpaper by [AllStar112](https://github.com/AllStar112)

```css
@import url("https://cdn.jsdelivr.net/gh/tedhinklater/finimalism@main/Finimalism11.css");
/* Custom Colours */
:root { 
  --accent: 169, 23, 82; 
  --backdropBlur: blur(7px);
  --rounding: 0.8em; 
  --tint: 36, 8, 20; 
  --tint2: 117, 21, 60; 
}
```
<img width="1920" height="1080" alt="pink" src="https://github.com/user-attachments/assets/be8dfe52-cbef-4728-a162-04b37528710a" />

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
