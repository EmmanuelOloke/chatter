import { generateComponents } from '@uploadthing/react';

import type { OurFileRouter } from '../app/(guest_route)/api/uploadthing/core';

export const { UploadButton, UploadDropzone, Uploader } = generateComponents<OurFileRouter>();
