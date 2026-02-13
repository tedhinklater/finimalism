# Finimalism for Jellyfin v10.11.x  ![jsDelivr](https://data.jsdelivr.com/v1/package/gh/tedhinklater/finimalism/badge) 

Just paste the import line into your "Dashboard > Branding > CSS" section, or "User Settings > Display > CSS" section.

Note: For Jellyfin Media Player, you need the latest [Jellyfin Desktop 2.0.0](https://flathub.org/en/apps/org.jellyfin.JellyfinDesktop)

### Examples with [Home Screen Sections](https://github.com/IAmParadox27/jellyfin-plugin-home-sections) / [Featured Content Bar](https://github.com/tedhinklater/Jellyfin-Featured-Content-Bar) / [Jellyfin Enhanced](https://github.com/n00bcodr/Jellyfin-Enhanced)

## V11
```css
@import url("https://cdn.jsdelivr.net/gh/tedhinklater/finimalism@main/Finimalism11.css");
```

## V12
```css
@import url("https://cdn.jsdelivr.net/gh/tedhinklater/finimalism@main/Finimalism12.css");
```

<table>
<tr>
<td width="50%" valign="top">

## Modded UI & animations (v11)

<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/979bf451-53f6-43f9-8032-fc0093ec1736" />

![movie](https://github.com/user-attachments/assets/2f8d44f1-2a02-42ff-ba08-fc9ee63a7aef)

![show](https://github.com/user-attachments/assets/f7f01b87-d3e4-43b8-814b-d44f5adf6c80)

![player](https://github.com/user-attachments/assets/e50a50aa-c020-4c66-893f-d7b6e0c0a6b3)

</td>
<td width="50%" valign="top">

## Classic Jellyfin layout (v12)

<img width="1920" height="1080" alt="1" src="https://github.com/user-attachments/assets/d6c2cf92-a68c-48fa-9613-f64c573d5794" />

<img width="1920" height="1080" alt="2" src="https://github.com/user-attachments/assets/cf8ea55e-104e-41a8-ad57-b264517b35af" />

<img width="1920" height="1080" alt="3" src="https://github.com/user-attachments/assets/397ce120-7935-4637-878f-d5a5e2968c8a" />

<img width="1920" height="1080" alt="4" src="https://github.com/user-attachments/assets/9b0e43d9-701d-4fce-819c-6418a27f7fa8" />

</td>
</tr>
</table>

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
- Which version of the theme (10.11, 10.11-Black, 11, 12)
