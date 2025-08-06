import supabase from './supabase'

export async function uploadImage(file: File, userId: string) {
  const filePath = `${userId}/${file.name}`

  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true
    })

  if (error) throw error

  const { data: urlData } = supabase
    .storage
    .from('avatars')
    .getPublicUrl(filePath)

  return urlData?.publicUrl
}