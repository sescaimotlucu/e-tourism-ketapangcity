
import { Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface MediaUploadCardProps {
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MediaUploadCard = ({ onFileUpload }: MediaUploadCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Upload className="h-5 w-5 mr-2 text-red-soft" />
          Upload Media
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="file-upload">Pilih File</Label>
          <Input
            id="file-upload"
            type="file"
            multiple
            accept="image/*,video/*"
            onChange={onFileUpload}
            className="mt-1"
          />
          <p className="text-sm text-gray-500 mt-1">
            Mendukung: JPG, PNG, MP4, AVI (Maks 50MB)
          </p>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">Drag & Drop file disini</p>
          <p className="text-sm text-gray-500">atau klik browse untuk memilih</p>
        </div>

        <div className="bg-golden-beige/10 p-4 rounded-lg">
          <h4 className="font-medium text-red-dark mb-2">Tips Upload:</h4>
          <ul className="text-sm text-green-forest space-y-1">
            <li>• Ukuran optimal gambar: 1200x800px</li>
            <li>• Format video: MP4, maksimal 50MB</li>
            <li>• Gunakan nama file yang deskriptif</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
