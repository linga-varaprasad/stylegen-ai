export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      body_measurements: {
        Row: {
          body_shape: Database["public"]["Enums"]["body_shape"] | null
          created_at: string
          fit_preferences: Json | null
          height: number | null
          id: string
          updated_at: string
          user_id: string
          weight: number | null
        }
        Insert: {
          body_shape?: Database["public"]["Enums"]["body_shape"] | null
          created_at?: string
          fit_preferences?: Json | null
          height?: number | null
          id?: string
          updated_at?: string
          user_id: string
          weight?: number | null
        }
        Update: {
          body_shape?: Database["public"]["Enums"]["body_shape"] | null
          created_at?: string
          fit_preferences?: Json | null
          height?: number | null
          id?: string
          updated_at?: string
          user_id?: string
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "body_measurements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      body_scans: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          measurements: Json | null
          scan_image_url: string | null
          status: Database["public"]["Enums"]["scan_status"] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          measurements?: Json | null
          scan_image_url?: string | null
          status?: Database["public"]["Enums"]["scan_status"] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          measurements?: Json | null
          scan_image_url?: string | null
          status?: Database["public"]["Enums"]["scan_status"] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      orders: {
        Row: {
          created_at: string
          id: string
          items: Json
          payment_intent_id: string | null
          shipping_address: Json | null
          status: Database["public"]["Enums"]["payment_status"] | null
          total_amount: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          items: Json
          payment_intent_id?: string | null
          shipping_address?: Json | null
          status?: Database["public"]["Enums"]["payment_status"] | null
          total_amount: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          items?: Json
          payment_intent_id?: string | null
          shipping_address?: Json | null
          status?: Database["public"]["Enums"]["payment_status"] | null
          total_amount?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      outfit_suggestions: {
        Row: {
          created_at: string
          generated_outfit_data: Json
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          generated_outfit_data: Json
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          generated_outfit_data?: Json
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "outfit_suggestions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      outfit_tryons: {
        Row: {
          created_at: string | null
          id: string
          outfit_image: string
          rendered_image: string | null
          status: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          outfit_image: string
          rendered_image?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          outfit_image?: string
          rendered_image?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      product_recommendations: {
        Row: {
          created_at: string | null
          description: string | null
          external_url: string | null
          id: string
          image_url: string | null
          platform: string
          price: number | null
          product_name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          external_url?: string | null
          id?: string
          image_url?: string | null
          platform: string
          price?: number | null
          product_name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          external_url?: string | null
          id?: string
          image_url?: string | null
          platform?: string
          price?: number | null
          product_name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          auth_provider: string | null
          created_at: string
          email: string | null
          id: string
          name: string | null
          updated_at: string
        }
        Insert: {
          auth_provider?: string | null
          created_at?: string
          email?: string | null
          id: string
          name?: string | null
          updated_at?: string
        }
        Update: {
          auth_provider?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      shopping_cart: {
        Row: {
          created_at: string
          id: string
          price: number
          product_id: string
          quantity: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          price: number
          product_id: string
          quantity?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          price?: number
          product_id?: string
          quantity?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      social_trends: {
        Row: {
          created_at: string | null
          description: string | null
          engagement_count: number | null
          id: string
          image_url: string | null
          platform: string
          trend_title: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          engagement_count?: number | null
          id?: string
          image_url?: string | null
          platform: string
          trend_title: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          engagement_count?: number | null
          id?: string
          image_url?: string | null
          platform?: string
          trend_title?: string
        }
        Relationships: []
      }
      style_recommendations: {
        Row: {
          created_at: string
          feedback: Json | null
          id: string
          recommendations: Json
          user_id: string
        }
        Insert: {
          created_at?: string
          feedback?: Json | null
          id?: string
          recommendations: Json
          user_id: string
        }
        Update: {
          created_at?: string
          feedback?: Json | null
          id?: string
          recommendations?: Json
          user_id?: string
        }
        Relationships: []
      }
      thrift_store_listings: {
        Row: {
          created_at: string
          id: string
          images: string[] | null
          item_name: string
          location: string | null
          price: number
          store_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          images?: string[] | null
          item_name: string
          location?: string | null
          price: number
          store_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          images?: string[] | null
          item_name?: string
          location?: string | null
          price?: number
          store_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      try_on_sessions: {
        Row: {
          created_at: string
          id: string
          outfit_image_url: string
          rendered_image_url: string | null
          status: Database["public"]["Enums"]["try_on_status"] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          outfit_image_url: string
          rendered_image_url?: string | null
          status?: Database["public"]["Enums"]["try_on_status"] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          outfit_image_url?: string
          rendered_image_url?: string | null
          status?: Database["public"]["Enums"]["try_on_status"] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      wardrobe_items: {
        Row: {
          category: Database["public"]["Enums"]["clothing_category"]
          color: string | null
          created_at: string
          id: string
          image_url: string | null
          material: string | null
          size: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          category: Database["public"]["Enums"]["clothing_category"]
          color?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          material?: string | null
          size?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: Database["public"]["Enums"]["clothing_category"]
          color?: string | null
          created_at?: string
          id?: string
          image_url?: string | null
          material?: string | null
          size?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wardrobe_items_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      body_shape: "hourglass" | "pear" | "rectangle" | "triangle" | "apple"
      clothing_category:
        | "tops"
        | "bottoms"
        | "dresses"
        | "outerwear"
        | "shoes"
        | "accessories"
      payment_status: "pending" | "completed" | "failed" | "refunded"
      scan_status: "pending" | "processing" | "completed" | "failed"
      try_on_status: "pending" | "rendering" | "completed" | "failed"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
