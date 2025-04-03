 <template>
    <ShadcnBreadcrumb>
      <ShadcnBreadcrumbList>
        <ShadcnBreadcrumbItem
          v-for="(item, index) in items"
          :key="index"
          :class="{'hidden md:block': index !== items.length - 1}"
        >
          <ShadcnBreadcrumbLink v-if="item.link" :href="item.link">
            {{ item.title }}
          </ShadcnBreadcrumbLink>
          <ShadcnBreadcrumbPage v-else>
            {{ item.title }}
          </ShadcnBreadcrumbPage>
          <ShadcnBreadcrumbSeparator v-if="index !== items.length - 1" class="hidden md:block" />
        </ShadcnBreadcrumbItem>
      </ShadcnBreadcrumbList>
    </ShadcnBreadcrumb>
  </template>

  <script setup lang="ts">
  import {
    Breadcrumb as ShadcnBreadcrumb,
    BreadcrumbItem as ShadcnBreadcrumbItem,
    BreadcrumbLink as ShadcnBreadcrumbLink,
    BreadcrumbList as ShadcnBreadcrumbList,
    BreadcrumbPage as ShadcnBreadcrumbPage,
    BreadcrumbSeparator as ShadcnBreadcrumbSeparator,
  } from '@/shadcn/ui/breadcrumb';

  interface BreadcrumbItem {
    title: string;
    link?: string;
  }

  const props = defineProps<{
    items: BreadcrumbItem[];
  }>();
  </script>

  <style scoped>

  </style>