import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ArchitectureData {
  stoId: string;
  arsitekturId: string;
  totalPort: string;
  usedPort: string;
}

export default function InputArchitecture() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ArchitectureData>({
    stoId: "",
    arsitekturId: "",
    totalPort: "",
    usedPort: "",
  });

  const handleInputChange = (field: keyof ArchitectureData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Architecture data submitted:", formData);
    // Show success message or redirect
  };

  const handleBack = () => {
    navigate("/input");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="px-6 md:px-20 lg:px-24 pb-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-black">
            Input Data
          </h1>
        </div>

        {/* Form Card */}
        <Card className="max-w-4xl rounded-3xl shadow-lg">
          <CardContent className="p-8">
            {/* Form Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-poppins text-2xl md:text-3xl font-medium text-black">
                Input Data Arsitektur Jaringan
              </h2>
              <Button
                onClick={handleBack}
                variant="outline"
                className="bg-red-200 hover:bg-red-300 border-red-300 text-black font-poppins font-medium rounded-xl px-6 py-2"
              >
                ← Back
              </Button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STO ID Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="stoId"
                  className="font-poppins text-lg font-medium text-black"
                >
                  STO ID
                </Label>
                <Input
                  id="stoId"
                  type="text"
                  placeholder="e.g., JGL001"
                  value={formData.stoId}
                  onChange={(e) => handleInputChange("stoId", e.target.value)}
                  className="h-12 border-gray-300 rounded-xl font-poppins text-base"
                  required
                />
              </div>

              {/* Arsitektur ID Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="arsitekturId"
                  className="font-poppins text-lg font-medium text-black"
                >
                  Arsitektur ID
                </Label>
                <Input
                  id="arsitekturId"
                  type="text"
                  placeholder="e.g., ARCH001"
                  value={formData.arsitekturId}
                  onChange={(e) =>
                    handleInputChange("arsitekturId", e.target.value)
                  }
                  className="h-12 border-gray-300 rounded-xl font-poppins text-base"
                  required
                />
              </div>

              {/* Total Port Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="totalPort"
                  className="font-poppins text-lg font-medium text-black"
                >
                  Total Port
                </Label>
                <Input
                  id="totalPort"
                  type="number"
                  placeholder="100"
                  value={formData.totalPort}
                  onChange={(e) =>
                    handleInputChange("totalPort", e.target.value)
                  }
                  className="h-12 border-gray-300 rounded-xl font-poppins text-base"
                  required
                  min="0"
                />
              </div>

              {/* Used Port Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="usedPort"
                  className="font-poppins text-lg font-medium text-black"
                >
                  Used Port
                </Label>
                <Input
                  id="usedPort"
                  type="number"
                  placeholder="75"
                  value={formData.usedPort}
                  onChange={(e) =>
                    handleInputChange("usedPort", e.target.value)
                  }
                  className="h-12 border-gray-300 rounded-xl font-poppins text-base"
                  required
                  min="0"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full h-12 bg-sup-red hover:bg-red-600 text-black font-poppins font-semibold text-lg rounded-xl"
                >
                  Submit Architecture Data
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
