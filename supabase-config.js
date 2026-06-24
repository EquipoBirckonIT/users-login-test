// =============================================
//  CONFIGURACIÓN DE SUPABASE
//  Cambia estos dos valores con los de tu proyecto
// =============================================

const SUPABASE_URL  = "https://smcorwiualomrykkabuz.supabase.co";   // <-- pega tu URL aquí
const SUPABASE_KEY  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtY29yd2l1YWxvbXJ5a2thYnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNTczMDksImV4cCI6MjA5NzgzMzMwOX0.iKvtAmy1RnZ4sod6M8iWm19GwEREn_Uo6qiT2gKNElY";                 // <-- pega tu anon key aquí

// =============================================
//  ROLES DISPONIBLES
//  Puedes añadir o quitar roles según necesites
// =============================================

const ROLES = {
  admin:    "Administrador",
  editor:   "Editor",
  viewer:   "Visitante",
};
