import { NextSeoProps } from "next-seo"

export interface Seo {
  title: NextSeoProps["title"]
  description: NextSeoProps["description"]
}

type ComponentList = "mediaContainer" | "imageReveal" | "mediaSlider" | "asymmetricMediaContainer" | "workInfo"

export type CursorType = "default" | "click"

export interface WorkCardProps {
  index?: number
  awardImage: string
  id: string
  mediaSrcDesktop: string
  mediaSrcMobile: string
  mediaType: string
  services?: string[]
  title: string
  url: string
}
export interface MediaDataProps {
  items: {
    mediaType: string
    mediaData: {
      mediaDesktop: {
        width: number
        height: number
        alt: string
        url: string
      }
      mediaMobile: {
        width: number
        height: number
        alt: string
        url: string
      }
    }
    isAutoplay: boolean
    thumbnail?: string
    thumbnailMobile?: string
  }[]
  smallLeft?: boolean
  isPaddingX?: boolean
  workUrl: string
}
export interface WorkInfoProps {
  mediaType: "image" | "video"
  mediaTypeMobile: "image" | "video"
  mediaSrc: string
  mediaSrcMobile?: string
  title: string
  service?: string
  awardImage?: string | null
  case: {
    summary: string
    detail?: string
    mediaLink: string
  }
  client: string
  clientType: string[]
  market: string
  services: string[]
  website: {
    ui: string
    url: string
  }
  award: {
    ui: string
    url: string
  }[]
  media: {
    ui: string
    url: string
  }[]
}
export interface ComponentDataProps {
  component: ComponentList
  propData: MediaDataProps | WorkInfoProps
  props: any
}
export interface ServiceProps {
  id: string
  title: string
  description: string
}
export interface AwardProps {
  id: string
  title: string
  image: string
  category: string
  url: string
}
export interface TeamMemberProps {
  id: string
  name: string
  surname: string
  role: string
  profileImage: string
  iconImage: string
  linkedin: string
}
