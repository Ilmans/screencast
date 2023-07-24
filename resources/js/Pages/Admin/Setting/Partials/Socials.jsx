import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import { useForm } from '@inertiajs/react'
import React from 'react'

function Socials({website}) {
   
    const {data,setData,errors,post,processing} = useForm({
        socials : JSON.parse(website?.socials ?? '{}')
        
    })
    const submit = (e) => {
        e.preventDefault();
       post(route('admin.settings.set'));

    }
  return (
    <Card className="p-4 space-y-4">
            <CardHeader>
                <CardTitle className="text-sm">Sosial Media</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit} className="space-y-2">
                    <div>
                        <Label className="text-sm">Facebook</Label>
                        <Input onChange={(e) => {
                            let newData = { socials : {...data.socials,facebook : e.target.value}}
                          
                            setData(newData)
                        }} value={data.socials.facebook} type="text" name="facebook" className="mt-1" />
                       
                    </div>
                    <div>
                        <Label className="text-sm">Instagram</Label>
                        <Input onChange={(e) => {
                             let newData = { socials : {...data.socials,instagram : e.target.value}}
                            setData(newData)
                        }} value={data.socials.instagram} type="text" name="instagram" className="mt-1" />
                    </div>
                    <div>
                        <Label className="text-sm">Twitter</Label>
                        <Input onChange={(e) => {
                              let newData = { socials : {...data.socials,twitter : e.target.value}}
                            setData(newData)
                        }} value={data.socials.twitter} type="text" name="twitter" className="mt-1" />
                    </div>
                    <div>
                        <Label className="text-sm">Youtube</Label>
                        <Input onChange={(e) => {
                                let newData = { socials : {...data.socials,youtube : e.target.value}}
                            setData(newData)
                        }} value={data.socials.youtube} type="text" name="youtube" className="mt-1" />
                    </div>
                   
                    <div>
                        <Button disabled={processing} type="submit" size="lg" variant="secondary">
                            {processing ? 'Loading...' : 'Simpan'}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
  )
}

export default Socials