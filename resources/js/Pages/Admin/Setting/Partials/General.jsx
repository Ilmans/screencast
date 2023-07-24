
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { useForm } from "@inertiajs/react";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";

function General({website}) {
    const { data, setData, errors, post } = useForm({
        name: website?.name,
        about: website?.about,
        address: website?.address,
    });

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const submit = (e) => {
        e.preventDefault();
       post(route('admin.settings.set'));

    }
        
    return (
        <Card className="p-4 space-y-4">
            <CardHeader>
                <CardTitle className="text-sm">Pengaturan umum</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit} className="space-y-2">
                    <div>
                        <Label className="text-sm">Nama Website</Label>
                        <Input onChange={onChange} value={data.name} type="text" name="name" className="mt-1" />
                    </div>
                    <div>
                        <Label className="text-sm">Deskripsi Website</Label>
                        <Textarea onChange={onChange}  name="about" className="mt-1" >
                            {data.about}
                        </Textarea>
                    </div>
                    <div>
                        <Label className="text-sm">Alamat</Label>
                        <Textarea onChange={onChange} name="address" className="mt-1" >
                            {data.address}
                        </Textarea>
                    </div>
                    <div>
                        <Button type="submit" size="lg" variant="secondary">
                            Simpan
                        </Button>
                    </div>
                    
                </form>
            </CardContent>
        </Card>
    );
    
}

export default General;
